import "../../../styles/swap/StudySwap.css"
import React, {useContext} from "react";
import StudySwapCard from "./StudySwapCard";
import TeachContext from "../../../contexts/swap/TeachContext";
import LearnContext from "../../../contexts/swap/LearnContext";
import SlotContext from "../../../contexts/swap/SlotContext";
import {CrossIco} from "../../../icons/IconsSelect";
import {methods, urls} from "../../SPApi";
import CourseContext from "../../../contexts/swap/CourseContext";
import StudySwapCardsContext from "../../../contexts/swap/StudySwapCardsContext";
import {Link} from "react-router-dom";
import StudySwapHistoryContext from "../../../contexts/swap/StudySwapHistoryContext";


const StudySwap = () => {
    const [teaches] = useContext(TeachContext).teaches;
    const [refreshTeaches, setRefreshTeaches] = useContext(TeachContext).refreshTeaches;
    const [learns] = useContext(LearnContext).learns;
    const [refreshLearns, setRefreshLearns] = useContext(LearnContext).refreshLearns;
    const [slots] = useContext(SlotContext).slots;
    const [refreshSlots, setRefreshSlots] = useContext(SlotContext).refreshSlots;
    const [course] = useContext(CourseContext).course;
    const [studySwapCards] = useContext(StudySwapCardsContext).studySwapCards;

    const [selectedStudySwapRequest] = useContext(StudySwapCardsContext).selectedStudySwapRequestOnly
    const [refreshStudySwapCards, setRefreshStudySwapCards] = useContext(StudySwapCardsContext).refreshStudySwapCards
    const [refreshStudySwapHistory, setRefreshStudySwapHistory] = useContext(StudySwapHistoryContext).refreshStudySwapHistory


    function addSlotsOnClick() {
        let day = document.getElementById("cbo-slot-day")
        let time = document.getElementById("cbo-slot-time")

        let slotData = {
            slot_day: day.value,
            slot_time: time.value,
        }

        fetch(urls.post_slot, methods.post(slotData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshSlots(!refreshSlots);
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function deleteSlotsOnClick(e) {
        let id = e.target.id.split("-").at(-1);
        let slot = document.getElementById("srow-slot-" + id).innerHTML.split("|");
        if (slot.length === 2) {
            let slotDay = slot[0].trim()
            let slotTime = slot[1].trim()

            let deleteSlotData = {
                slot_day: slotDay,
                slot_time: slotTime,
            }

            fetch(urls.delete_slot, methods.post(deleteSlotData))
                .then(r => r.json())
                .then(data => {
                    if (data) {
                        setRefreshSlots(!refreshSlots);
                    }
                }).catch(errors => {
                console.log(errors)
            })
        }
    }

    function addTeachOnClick() {
        let course = document.getElementById("cbo-teach-course");

        let teach_data = {
            course_code: course.value,
        }

        fetch(urls.post_teach, methods.post(teach_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshTeaches(!refreshTeaches)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function deleteTeachOnClick(e) {
        let id = e.target.id.split("-").at(-1);
        let teachCourse = document.getElementById("trow-course-" + id).innerHTML;

        let deleteTeachCourseData = {
            course_code: teachCourse,
        }

        fetch(urls.delete_teach, methods.post(deleteTeachCourseData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshTeaches(!refreshTeaches);
                }
            }).catch(errors => {
            console.log(errors)
        })

    }

    function addLearnOnClick() {
        let course = document.getElementById("cbo-learn-course");

        let learnData = {
            course_code: course.value,
        }

        fetch(urls.post_learn, methods.post(learnData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshLearns(!refreshLearns)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function deleteLearnOnClick(e) {
        let id = e.target.id.split("-").at(-1);
        let learnCourse = document.getElementById("lrow-course-" + id).innerHTML;

        let deleteLearnCourse = {
            course_code: learnCourse,
        }

        fetch(urls.delete_learn, methods.post(deleteLearnCourse))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshLearns(!refreshLearns)
                }
            }).catch(errors => {
            console.log(errors)
        })

    }

    function StudySwapAcceptOnClick() {
        fetch(urls.post_study_swap_action + `/${selectedStudySwapRequest}`, methods.post({action: 1}))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshStudySwapCards(!refreshStudySwapCards);
                    setRefreshLearns(!refreshLearns);
                    setRefreshTeaches(!refreshTeaches);
                    setRefreshSlots(!refreshSlots);
                    setRefreshStudySwapHistory(!refreshStudySwapHistory);
                }
            })
    }

    function StudySwapDeclineOnClick() {
        fetch(urls.post_study_swap_action + `/${selectedStudySwapRequest}`, methods.post({action: -1}))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshStudySwapCards(!refreshStudySwapCards);
                    setRefreshSlots(!refreshSlots);
                    setRefreshTeaches(!refreshTeaches);
                    setRefreshLearns(!refreshLearns);
                    setRefreshStudySwapHistory(!refreshStudySwapHistory);
                }
            })
    }

    function formatDate(givenDate) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        givenDate = new Date(Date.parse(givenDate));

        return `${months[givenDate.getMonth()]} ${givenDate.getDate()}, ${givenDate.getFullYear()}`
    }

    return (
        <div className="stud-swap">
            <div className="swap-cards">
                {
                    (() => {
                        if (studySwapCards) {
                            if (studySwapCards.study_swap_request_id > 0) {
                                return (
                                    <div className={"study-swap-summary-card" + ((() => {
                                        if (studySwapCards.request_status === -1) {
                                            return " declined";
                                        } else if (studySwapCards.request_status === 1) {
                                            return " approved";
                                        } else if (studySwapCards.user_accepted === -1) {
                                            return " user-declined";
                                        } else if (studySwapCards.user_accepted === 1) {
                                            return " user-accepted";
                                        } else {
                                            return ""
                                        }
                                    })())}>
                                        <div className="sssc-info">
                                            <p>Creator: <Link to={
                                                "/profile/" + studySwapCards.study_swap_request_creator_bracu_id
                                            }>
                                                {
                                                    studySwapCards.study_swap_request_creator_name
                                                }
                                            </Link>
                                            </p>
                                            <p>Created
                                                on: {formatDate(studySwapCards.study_swap_request_date_created)}</p>
                                            <p>Total swaps required: {studySwapCards.total_swaps}</p>
                                        </div>
                                        <div className="sssc-status">
                                            {
                                                 (() => {
                                                    if (studySwapCards.user_accepted === 1) {
                                                        return (
                                                            <p>Accepted</p>
                                                        )
                                                    } else if (studySwapCards.user_accepted === -1) {
                                                        return (
                                                            <p>Declined</p>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="sssc-action-buttons">
                                                                <button onClick={StudySwapAcceptOnClick}>
                                                                    Accept
                                                                </button>
                                                                <button onClick={StudySwapDeclineOnClick}>
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
                        if (studySwapCards && studySwapCards.cards) {
                            return studySwapCards.cards.map((item, i) => (
                                (() => {
                                    if (item.id !== -1) {
                                        return (
                                            <StudySwapCard key={i}
                                                           teacher_name={item.teacher_name}
                                                           teacher_photo={item.teacher_photo}
                                                           learner_name={item.learner_name}
                                                           learner_photo={item.learner_photo}
                                                           course_code={item.course_code}
                                                           study_slot={item.study_slot}
                                            >

                                            </StudySwapCard>
                                        )
                                    }
                                })()
                            ))
                        }
                    })()
                }
            </div>
            <div className={"swap-right-sidebar"}>
                <div className="slot-container">
                    <div className="table-slot-container">
                        <div className="table-slot-scroll">
                            <table className={"table-slot"}>
                                <thead>
                                    <tr>
                                        <td colSpan={"2"}>Available Slots</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (() => {
                                            if (slots) {
                                                return slots.map((item, i) => (
                                                    <tr key={i}
                                                        id={"srow-" + i}
                                                    >
                                                        <td id={"srow-slot-" + i}>{item}</td>
                                                        <td id={"srow-delete-ico-" + i}
                                                            className={"table-row-delete-cell"}
                                                            onClick={deleteSlotsOnClick}
                                                        ><CrossIco id={i}/></td>
                                                    </tr>
                                                ))
                                            }
                                        })()
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="slot-cbo-container">
                        <select id={"cbo-slot-day"} className={"cbo-slot-day"}>
                            <option disabled defaultValue>Day</option>
                            <option>SAT</option>
                            <option>SUN</option>
                            <option>MON</option>
                            <option>TUE</option>
                            <option>WED</option>
                            <option>THU</option>
                            <option>FRI</option>
                        </select>
                        <select id={"cbo-slot-time"}
                                className={"cbo-slot-time"}
                                defaultValue={"Time"}
                        >
                            <option disabled>Time</option>
                            <option>8:00 AM</option>
                            <option>9:30 AM</option>
                            <option>11:00 AM</option>
                            <option>12:30 PM</option>
                            <option>2:00 PM</option>
                            <option>3:30 PM</option>
                            <option>5:00 PM</option>
                            <option>6:30 PM</option>
                            <option>8:00 PM</option>
                        </select>
                    </div>
                    <button onClick={addSlotsOnClick}>Add</button>
                </div>
                <div className="offer-container">
                    <div className="table-op-container">
                        <div className="table-op-scroll">
                            <table className={"table-op"}>
                                <thead>
                                    <tr>
                                        <td colSpan={"2"}>Teach</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (() => {
                                            if (teaches) {
                                                return teaches.map((item, i) => (
                                                    <tr id={"trow-" + i} key={i}>
                                                        <td id={"trow-course-" + i}>{item}</td>
                                                        <td id={"trow-delete-ico-" + i}
                                                            className={"table-row-delete-cell"}
                                                            onClick={deleteTeachOnClick}
                                                        ><CrossIco id={i}/></td>
                                                    </tr>
                                                ))
                                            }
                                        })()
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <select id={"cbo-teach-course"}
                            className={"cbo-op-course"}
                            defaultValue={"Course"}
                    >
                        <option>Course</option>
                        {
                            (() => {
                                if (course) {
                                    return course.map((item, i) => (
                                        <option key={i}>{item}</option>
                                    ))
                                }
                            })()
                        }

                    </select>
                    <button onClick={addTeachOnClick}>Add</button>
                </div>
                <div className="prefer-container">
                    <div className="table-op-container">
                        <table className={"table-op"}>
                            <thead>
                                <tr>
                                    <td colSpan={"2"}>Learn</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (() => {
                                        if (learns) {
                                            return learns.map((item, i) => (
                                                <tr key={i}
                                                    id={"lrow-" + i}
                                                >
                                                    <td id={"lrow-course-" + i}>{item}</td>
                                                    <td id={"lrow-delete-ico-" + i}
                                                        className={"table-row-delete-cell"}
                                                        onClick={deleteLearnOnClick}
                                                    ><CrossIco id={i}/></td>
                                                </tr>
                                            ))
                                        }
                                    })()
                                }
                            </tbody>
                        </table>
                    </div>
                    <select id={"cbo-learn-course"}
                            className={"cbo-op-course"}
                            defaultValue={"Course"}
                    >
                        <option>Course</option>
                        {
                            (() => {
                                if (course) {
                                    return course.map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))

                                }
                            })()
                        }

                    </select>
                    <button onClick={addLearnOnClick}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default StudySwap;