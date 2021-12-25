import "../../../styles/swap/SectionSwap.css"
import React, {useContext, useEffect, useState} from "react";
import SectionSwapCard from "./SectionSwapCard";
import CourseContext from "../../../contexts/swap/CourseContext";
import {methods, urls} from "../../SPApi";
import {initialStates} from "../../InitialStates";
import OfferContext from "../../../contexts/swap/OffersContext";
import PrefersContext from "../../../contexts/swap/PrefersContext";
import {CrossIco} from "../../../icons/IconsSelect";
import SectionSwapCardsContext from "../../../contexts/swap/SectionSwapCardsContext";
import {Link} from "react-router-dom";
import SectionSwapHistoryContext from "../../../contexts/swap/SectionSwapHistoryContext";


const SectionSwap = () => {
    const [course] = useContext(CourseContext).course;
    const [offers] = useContext(OfferContext).offers;
    const [refreshOffers, setRefreshOffers] = useContext(OfferContext).refreshOffers;
    const [prefers] = useContext(PrefersContext).prefers;
    const [refreshPrefers, setRefreshPrefers] = useContext(PrefersContext).refreshPrefers;
    const [secSwapCards] = useContext(SectionSwapCardsContext).secSwapCards;

    const [selectedSecSwapRequest] = useContext(SectionSwapCardsContext).selectedSecSwapRequestOnly
    const [refreshSecSwapCards, setRefreshSecSwapCards] = useContext(SectionSwapCardsContext).refreshSecSwapCards

    const [refreshSectionSwapHistory, setRefreshSectionSwapHistory] = useContext(SectionSwapHistoryContext).refreshSectionSwapHistory

    const [cboOfferSectionsState, setCboOfferSectionState] = useState(initialStates.sectionState);
    const [cboOfferSelectedCourse, setCboOfferSelectedCourse] = useState('');
    const [cboPreferSectionsState, setCboPreferSectionState] = useState(initialStates.sectionState);
    const [cboPreferSelectedCourse, setCboPreferSelectedCourse] = useState('');

    useEffect(() => {
        if (cboOfferSelectedCourse) {
            fetch(urls.get_section_by_course(cboOfferSelectedCourse), methods.get())
                .then(r => r.json())
                .then(data => {
                    if (data) {
                        setCboOfferSectionState(data)
                    } else {
                        setCboOfferSectionState([])
                    }
                    console.log(data)
                }).catch(errors => console.log(errors))
        }
    }, [cboOfferSelectedCourse])

    useEffect(() => {
        if (cboPreferSelectedCourse) {
            fetch(urls.get_section_by_course(cboPreferSelectedCourse), methods.get())
                .then(r => r.json())
                .then(data => {
                    if (data) {
                        setCboPreferSectionState(data)
                    } else {
                        setCboPreferSectionState([])
                    }
                }).catch(errors => console.log(errors))
        }
    }, [cboPreferSelectedCourse])

    function getOfferData() {
        let cbo_offer_course = document.getElementById("cbo-o-course");
        let cbo_offer_section = document.getElementById("cbo-o-section");
        return [
            {
                course_code: cbo_offer_course.value,
                section_number: cbo_offer_section.value,
            }
        ]
    }

    function addOfferOnClick() {
        const [offerData] = getOfferData();
        fetch(urls.post_offer, methods.post(offerData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshOffers(!refreshOffers)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function deleteOfferOnClick(e) {
        let id = e.target.id.split('-').at(-1);
        let offerRow = document.getElementById("orow-offer-" + id);
        let offerRowSplit = offerRow.innerHTML.split(" ");
        let [course, section] = offerRowSplit;
        section = section.substr(1, section.length - 2);
        let deleteOfferData = {
            course_code: course,
            section_number: section,
        }
        fetch(urls.delete_offer, methods.post(deleteOfferData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshOffers(!refreshOffers)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function getPreferData() {
        let cbo_prefer_course = document.getElementById("cbo-p-course");
        let cbo_prefer_section = document.getElementById("cbo-p-section");
        return [
            {
                course_code: cbo_prefer_course.value,
                section_number: cbo_prefer_section.value,
            }
        ]
    }

    function addPreferOnClick() {
        const [preferData] = getPreferData();
        fetch(urls.post_prefer, methods.post(preferData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshPrefers(!refreshPrefers);
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function deletePreferOnClick(e) {
        let id = e.target.id.split('-').at(-1);
        let preferRow = document.getElementById("prow-prefer-" + id);
        let preferRowSplit = preferRow.innerHTML.split(" ");
        let [course, section] = preferRowSplit;
        section = section.substr(1, section.length - 2);
        let deletePreferData = {
            course_code: course,
            section_number: section,
        }
        fetch(urls.delete_prefer, methods.post(deletePreferData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshPrefers(!refreshPrefers);
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function SecSwapAcceptOnClick() {
        fetch(urls.post_section_swap_action + `/${selectedSecSwapRequest}`, methods.post({action: 1}))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshSecSwapCards(!refreshSecSwapCards);
                    setRefreshOffers(!refreshOffers)
                    setRefreshPrefers(!refreshPrefers);
                    setRefreshSectionSwapHistory(!refreshSectionSwapHistory);
                }
            })
    }

    function SecSwapDeclineOnClick() {
        fetch(urls.post_section_swap_action + `/${selectedSecSwapRequest}`, methods.post({action: -1}))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshSecSwapCards(!refreshSecSwapCards);
                    setRefreshOffers(!refreshOffers)
                    setRefreshPrefers(!refreshPrefers);
                    setRefreshSectionSwapHistory(!refreshSectionSwapHistory);
                }
            })
    }

    function formatDate(givenDate) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        givenDate = new Date(Date.parse(givenDate));

        return `${months[givenDate.getMonth()]} ${givenDate.getDate()}, ${givenDate.getFullYear()}`
    }

    return (
        <div className="sec-swap">
            <div className="swap-cards">
                {
                    (() => {
                        if (secSwapCards) {
                            if (secSwapCards.sec_swap_request_id > 0) {
                                return (
                                    <div className={"sec-swap-summary-card" + ((() => {
                                        if (secSwapCards.request_status === -1) {
                                            return " declined";
                                        } else if (secSwapCards.request_status === 1) {
                                            return " approved";
                                        } else if (secSwapCards.user_accepted === -1) {
                                            return " user-declined";
                                        } else if (secSwapCards.user_accepted === 1) {
                                            return " user-accepted";
                                        } else {
                                            return ""
                                        }
                                    })())}>
                                        <div className="sssc-info">
                                            <p>Creator: <Link to={
                                                "/profile/" + secSwapCards.sec_swap_request_creator_bracu_id
                                            }>
                                                {
                                                    secSwapCards.sec_swap_request_creator_name
                                                }
                                            </Link>
                                            </p>
                                            <p>Created on: {formatDate(secSwapCards.sec_swap_request_date_created)}</p>
                                            <p>Total swaps required: {secSwapCards.total_swaps}</p>
                                        </div>
                                        <div className="sssc-status">
                                            {
                                                (() => {
                                                    if (secSwapCards.user_accepted === 1) {
                                                        return (
                                                            <p>Accepted</p>
                                                        )
                                                    } else if (secSwapCards.user_accepted === -1) {
                                                        return (
                                                            <p>Declined</p>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="sssc-action-buttons">
                                                                <button onClick={SecSwapAcceptOnClick}>
                                                                    Accept
                                                                </button>
                                                                <button onClick={SecSwapDeclineOnClick}>
                                                                    Decline
                                                                </button>
                                                            </div>
                                                        )
                                                    }
                                                })()
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        }
                    })()
                }

                {
                    (() => {
                        if (secSwapCards) {
                            if (secSwapCards.cards) {
                                return secSwapCards.cards.map((item, i) => (
                                    (() => {
                                        if (item.id !== -1) {
                                            return (
                                                <SectionSwapCard key={i}
                                                                 provider_name={item.provider_name}
                                                                 provider_photo={item.provider_photo}
                                                                 recipient_name={item.recipient_name}
                                                                 recipient_photo={item.recipient_photo}
                                                                 course_code={item.course_code}
                                                                 section_number={item.section_number}
                                                >

                                                </SectionSwapCard>
                                            )
                                        }
                                    })()
                                ))
                            }
                        } else {
                            console.log(secSwapCards)
                        }
                    })()
                }
            </div>
            <div className={"swap-right-sidebar"}>
                <div className="offer-container">
                    <div className="table-op-container">
                        <div className="table-op-scroll">
                            <table id={"table-o"} className={"table-op"}>
                                <thead>
                                    <tr>
                                        <td colSpan={"2"}>Offer</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (() => {
                                            if (offers) {
                                                return (
                                                    offers.map((item, i) => (
                                                        <tr id={"orow-" + i} key={i}>
                                                            <td id={"orow-offer-" + i}>{item}</td>
                                                            <td id={'orow-delete-ico-' + i}
                                                                className={"table-row-delete-cell"}
                                                                onClick={deleteOfferOnClick}>
                                                                <CrossIco id={i}/>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )
                                            }
                                        })()
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <select id={"cbo-o-course"} className={"cbo-op-course"}
                            defaultValue={"Select a course"}
                            onChange={(e) => {
                                setCboOfferSelectedCourse(e.target.value)
                            }}>
                        <option>Select a course</option>
                        {
                            (() => {
                                if (course) {
                                    return (
                                        course.map((item, i) => (
                                            <option key={i}
                                                    value={item}
                                            >{item}</option>
                                        ))
                                    )
                                }
                            })()
                        }
                    </select>
                    <select id={"cbo-o-section"} className={"cbo-op-section"} defaultValue={"Select a section"}>
                        <option>Select a section</option>
                        {
                            (() => {
                                if (cboOfferSectionsState && cboOfferSectionsState.course_sections) {
                                    return (
                                        cboOfferSectionsState.course_sections.map((item, i) => (
                                            <option key={i}
                                                    value={item}
                                            >{item}</option>
                                        ))
                                    )
                                }
                            })()
                        }
                    </select>
                    <button id={"btn-o-add"} onClick={addOfferOnClick}>Add Offer</button>
                </div>
                <div className="prefer-container">
                    <div className="table-op-container">
                        <table id={"table-p"} className={"table-op"}>
                            <thead>
                                <tr>
                                    <td colSpan={"2"}>Prefer</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (() => {
                                        if (prefers) {
                                            return (
                                                prefers.map((item, i) => (
                                                    <tr id={"prow" + i} key={i}>
                                                        <td id={"prow-prefer-" + i}>{item}</td>
                                                        <td id={"prow-delete-ico-" + i}
                                                            className={"table-row-delete-cell"}
                                                            onClick={deletePreferOnClick}>
                                                            <CrossIco id={i}/>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    })()
                                }
                            </tbody>
                        </table>
                    </div>
                    <select id={"cbo-p-course"} className={"cbo-op-course"}
                            defaultValue={"Select a course"}
                            onChange={(e) => {
                                setCboPreferSelectedCourse(e.target.value)
                            }}
                    >
                        <option>Select a course</option>
                        {
                            (() => {
                                if (course) {
                                    return (
                                        course.map((item, i) => (
                                            <option key={i} value={item}>{item}</option>
                                        ))
                                    )
                                }
                            })()
                        }
                    </select>
                    <select id={"cbo-p-section"} className={"cbo-op-section"} defaultValue={"Section"}>
                        <option>Select a section</option>
                        {
                            (() => {
                                if (cboPreferSectionsState && cboPreferSectionsState.course_sections) {
                                    return (
                                        cboPreferSectionsState.course_sections.map((item, i) => (
                                            <option key={i}
                                                    value={item}
                                            >{item}</option>
                                        ))
                                    )
                                }
                            })()
                        }
                    </select>
                    <button id={"btn-p-add"} onClick={addPreferOnClick}>Add Prefer</button>
                </div>
            </div>
        </div>
    )
}

export default SectionSwap;