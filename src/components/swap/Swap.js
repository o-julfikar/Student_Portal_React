import "../../styles/swap/Swap.css"
import React, {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Navigate, Route, Routes, useLocation} from "react-router";
import RequireAuth from "../accounts/RequireAuth";
import SectionSwap from "./components/SectionSwap";
import StudySwap from "./components/StudySwap";
import PrefersContext from "../../contexts/swap/PrefersContext";
import LearnContext from "../../contexts/swap/LearnContext";
import {methods, urls} from "../SPApi";
import SectionSwapCardsContext from "../../contexts/swap/SectionSwapCardsContext";
import StudySwapCardsContext from "../../contexts/swap/StudySwapCardsContext";
import OfferContext from "../../contexts/swap/OffersContext";
import TeachContext from "../../contexts/swap/TeachContext";
import SectionSwapHistoryContext from "../../contexts/swap/SectionSwapHistoryContext";
import StudySwapHistoryContext from "../../contexts/swap/StudySwapHistoryContext";
import SlotContext from "../../contexts/swap/SlotContext";


const Swap = (props) => {
    const location = useLocation();

    const [prefers] = useContext(PrefersContext).prefers;
    const [learns] = useContext(LearnContext).learns;
    const [selectedSecSwapRequest, setSelectedSecSwapRequest] = useContext(SectionSwapCardsContext).selectedSecSwapRequest
    const [selectedStudySwapRequest, setSelectedStudySwapRequest] = useContext(StudySwapCardsContext).selectedStudySwapRequest
    const [refreshOffers, setRefreshOffers] = useContext(OfferContext).refreshOffers;
    const [refreshPrefers, setRefreshPrefers] = useContext(PrefersContext).refreshPrefers;
    const [refreshTeaches, setRefreshTeaches] = useContext(TeachContext).refreshTeaches;
    const [refreshLearns, setRefreshLearns] = useContext(LearnContext).refreshLearns;
    const [refreshSlots, setRefreshSlots] = useContext(SlotContext).refreshSlots;
    const [sectionSwapHistory] = useContext(SectionSwapHistoryContext).sectionSwapHistoryOnly;
    const [studySwapHistory] = useContext(StudySwapHistoryContext).studySwapHistoryOnly;

    function postSectionSwapRequestOnClick() {
        let preferredSection = document.getElementById("cbo-preferred-section")
        if (preferredSection.selectedIndex === 0) {
            alert("Select a section of course to continue");
            return;
        }
        let preferredSectionSplit = preferredSection.value.split(" ");
        let [course, section] = preferredSectionSplit;
        section = section.substr(1, section.length - 2);
        let sectionSwapRequestData = {
            course_code: course,
            section_number: section,
        }
        fetch(urls.post_section_swap, methods.post(sectionSwapRequestData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setSelectedSecSwapRequest(parseInt(data))
                    setRefreshOffers(!refreshOffers);
                    setRefreshPrefers(!refreshPrefers);
                } else {
                    alert("Sorry, no section swap found for you at the moment. Please check back soon...")
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function postStudySwapRequestOnClick() {
        let preferredCourse = document.getElementById("cbo-preferred-study-course")
        if (preferredCourse.selectedIndex === 0) {
            alert("Select a course to continue");
            return;
        }
        let studySwapRequestData = {
            course_code: preferredCourse.value,
        }
        fetch(urls.post_study_swap, methods.post(studySwapRequestData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setSelectedStudySwapRequest(parseInt(data));
                    setRefreshSlots(!refreshSlots);
                    setRefreshTeaches(!refreshTeaches);
                    setRefreshLearns(!refreshLearns);
                } else {
                    alert("Sorry, no study swap found for you at the moment. Please check back soon...")
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function formatDate(givenDate) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        givenDate = new Date(Date.parse(givenDate));

        return `${months[givenDate.getMonth()]} ${givenDate.getDate()}, ${givenDate.getFullYear()}`
    }

    function secSwapRowOnClick(e) {
        let sec_req_id = e.target.id.split("-").at(-1);
        setSelectedSecSwapRequest(parseInt(sec_req_id));
    }

    function studySwapRowOnClick(e) {
        let study_req_id = e.target.id.split("-").at(-1);
        console.log('tast', study_req_id)
        setSelectedStudySwapRequest(parseInt(study_req_id));
        console.log(selectedStudySwapRequest)
    }

    function getApprovalText(approvalCode) {
        switch (approvalCode) {
            case -1:
                return "Declined";
            case 0:
                return "Pending";
            case 1:
                return "Approved";
            default:
                return "";
        }
    }

    props.customNav(2);
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"swap"}>
                <Routes>
                    <Route path={""} element={<Navigate replace to={"section"}/>}/>
                    <Route path={"/section"} element={
                        <RequireAuth>
                            <SectionSwap/>
                        </RequireAuth>
                    }/>
                    <Route exact path={"/study"} element={
                            <RequireAuth>
                                <StudySwap/>
                            </RequireAuth>
                    }/>
                </Routes>
                <div className={"swap-left-sidebar"}>
                    <nav>
                        <NavLink exact={"true"} to={"section"}
                                 className={({isActive}) => "swap-nav-link-button swap-nav-link" + (isActive ? "-active" : "")}>
                            <button>Section Swap</button>
                        </NavLink>
                        <NavLink exact={"true"} to={"study"}
                                 className={({isActive}) => "swap-nav-link-button swap-nav-link" + (isActive ? "-active" : "")}>
                            <button>Study Swap</button>
                        </NavLink>
                    </nav>
                    <div className="swap-history">
                        <Routes>
                            <Route path={"/section"} element={
                                <RequireAuth>
                                    <div className="swap-history-table-container table-op-container">
                                        <div className="swap-history-table-scroll table-op-scroll">
                                            <table className="swap-history-table table-op">
                                                <thead>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            Section Swaps History
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        sectionSwapHistory.map((item, i) =>
                                                            (() => {
                                                                if (item.id >= 0) {
                                                                    return (
                                                                        <tr key={i}
                                                                            id={'sec-swap-row-' + item.id}
                                                                            className={
                                                                                'swap-row' +
                                                                                (item.id === selectedSecSwapRequest ? " active" : "")
                                                                            }
                                                                            onClick={secSwapRowOnClick}
                                                                        >
                                                                            <td className={
                                                                                item.is_approved ? "approved" : ""
                                                                            }
                                                                                id={'sec-swap-row-date-' + item.id}
                                                                            >
                                                                                {formatDate(item.date_created)}
                                                                            </td>
                                                                            <td className={"approval-cell " + getApprovalText(item.is_approved).toLowerCase()}
                                                                                id={'sec-swap-row-status-' + item.id}
                                                                            >
                                                                                {
                                                                                    getApprovalText(item.is_approved)
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            })()
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </RequireAuth>
                            }/>

                            <Route path={"/study"} element={
                                <RequireAuth>
                                    <div className="swap-history-table-container table-op-container">
                                        <div className="swap-history-table-scroll table-op-scroll">
                                            <table className="swap-history-table table-op">
                                                <thead>
                                                    <tr>
                                                        <td colSpan={2}>
                                                            Study Swaps History
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        studySwapHistory.map((item, i) =>
                                                            (() => {
                                                                if (item.id >= 0) {
                                                                    return (
                                                                        <tr key={i}
                                                                            id={'study-swap-row-' + item.id}
                                                                            className={
                                                                                'swap-row' +
                                                                                (item.id === selectedStudySwapRequest ? " active" : "")
                                                                            }
                                                                            onClick={studySwapRowOnClick}
                                                                        >
                                                                            <td className={
                                                                                item.is_approved ? "approved" : ""
                                                                            }
                                                                                id={'study-swap-row-date-' + item.id}
                                                                            >
                                                                                {formatDate(item.date_created)}
                                                                            </td>
                                                                            <td className={"approval-cell " + getApprovalText(item.is_approved).toLowerCase()}
                                                                                id={'study-swap-row-status-' + item.id}
                                                                            >
                                                                                {
                                                                                    getApprovalText(item.is_approved)
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            })()
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </RequireAuth>
                            }/>
                        </Routes>
                    </div>
                    <div className="swap-controls">
                        <Routes>
                            <Route path={"/section"} element={
                                <RequireAuth>
                                    <select id={"cbo-preferred-section"}
                                            className={"cbo-section"}
                                            defaultValue={"Select preferred course"}
                                    >
                                        <option>Select preferred section</option>
                                        {
                                            (() => {
                                                if (prefers) {
                                                    return prefers.map((item, i) => (
                                                        <option key={i}>
                                                            {item}
                                                        </option>
                                                    ))
                                                }
                                            })()
                                        }
                                    </select>
                                    <button className="btn-send-req"
                                            onClick={postSectionSwapRequestOnClick}
                                    >
                                        Find & Request
                                    </button>
                                    <button className="btn-find" hidden
                                    >
                                        Find
                                    </button>
                                </RequireAuth>
                            }/>
                            <Route exact path={"/study"} element={
                                <RequireAuth>
                                    <select id={"cbo-preferred-study-course"}
                                            className={"cbo-section"}
                                            defaultValue={"Select preferred learning course"}
                                    >
                                        <option>Select preferred learning course</option>
                                        {
                                            (() => {
                                                if (learns) {
                                                    return learns.map((item, i) => (
                                                        <option key={i}>
                                                            {item}
                                                        </option>
                                                    ))
                                                }
                                            })()
                                        }
                                    </select>
                                    <button className="btn-send-req"
                                            onClick={postStudySwapRequestOnClick}
                                    >
                                        Find & Request
                                    </button>
                                    <button className="btn-find" hidden>Find</button>
                                </RequireAuth>
                            }/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Swap;