import "../../../styles/review/AddInstructor.css"
import React, {useEffect, useMemo, useState} from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";


const AddInstructor = () => {
    const [starPoint, setStarPoint] = useState(0);
    const [activeStarPoint, setActiveStarPoint] = useState(0)
    const [hoverStarPoint, setHoverStarPoint] = useState(0)
    const instructorData = useMemo(() => {
        return ({
            instructor_initial: null,
            instructor_fullname: null,
            instructor_photo: null,
            instructor_email: null,
            instructor_phone: null,
            course_code: null,
            review_text: null,
            review_points: null,
        })
    }, []);

    useEffect(() => {
        instructorData.review_points = starPoint;
    }, [instructorData, starPoint])

    useEffect(() => {
        if (hoverStarPoint === 0) {
            setStarPoint(activeStarPoint)
        } else {
            setStarPoint(hoverStarPoint)
        }
    }, [hoverStarPoint, activeStarPoint])

    function postInstructorOnClick() {
        console.log(instructorData)
        fetch(urls.post_instructor, methods.post(instructorData))
            .then(r => r.json())
            .then(data => {
                if (data > 0) {
                    console.log(data)
                    // resetOnClick()
                } else {
                    console.log(data)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    function resetOnClick() {
        document.getElementById("txt-initial").value = "";
        document.getElementById("txt-fullname").value = "";
        document.getElementById("img-instructor").src = icons.user_photo;
        document.getElementById("txt-email").value = "";
        document.getElementById("txt-phone").value = "";
        document.getElementById("txt-course-code").value = "";
        document.getElementById("txt-review").value = "";
    }

    return (
        <div className="add-instructor">
            <div className="ai-bg">
                <div className="ai-top">
                    <div className="ai-overlay-left">
                        <div className={"overlay-float"}/>
                    </div>
                    <div className="stars-container">
                        <img src={starPoint >= 1? icons.star_yellow : icons.star_gray}
                             alt="Star 1"
                             onMouseEnter={() => setHoverStarPoint(1)}
                             onMouseLeave={() => setHoverStarPoint(0)}
                             onClick={() => activeStarPoint === 1? setActiveStarPoint(0) : setActiveStarPoint(1)}
                        />
                        <img src={starPoint >= 2? icons.star_yellow : icons.star_gray}
                             alt="Star 2"
                             onMouseEnter={() => setHoverStarPoint(2)}
                             onMouseLeave={() => setHoverStarPoint(0)}
                             onClick={() => activeStarPoint === 2? setActiveStarPoint(0) : setActiveStarPoint(2)}
                        />
                        <img src={starPoint >= 3? icons.star_yellow : icons.star_gray}
                             alt="Star 3"
                             onMouseEnter={() => setHoverStarPoint(3)}
                             onMouseLeave={() => setHoverStarPoint(0)}
                             onClick={() => activeStarPoint === 3? setActiveStarPoint(0) : setActiveStarPoint(3)}
                        />
                        <img src={starPoint >= 4? icons.star_yellow : icons.star_gray}
                             alt="Star 4"
                             onMouseEnter={() => setHoverStarPoint(4)}
                             onMouseLeave={() => setHoverStarPoint(0)}
                             onClick={() => activeStarPoint === 4? setActiveStarPoint(0) : setActiveStarPoint(4)}
                        />
                        <img src={starPoint >= 5? icons.star_yellow : icons.star_gray}
                             alt="Star 5"
                             onMouseEnter={() => setHoverStarPoint(5)}
                             onMouseLeave={() => setHoverStarPoint(0)}
                             onClick={() => activeStarPoint === 5? setActiveStarPoint(0) : setActiveStarPoint(5)}
                        />
                    </div>
                    <div className="ai-overlay-right">
                        <div className={"overlay-float"}/>
                    </div>
                </div>
                <div className="ai-main">
                    <div className="name-container">
                        <input type="text" id="txt-initial"
                               placeholder={"Instructor Initial"}
                               onChange={
                                   (e) => instructorData.instructor_initial = e.target.value
                               }
                        />
                        <input type="text" id="txt-fullname"
                               placeholder={"Instructor Fullname"}
                               onChange={
                                   (e) => instructorData.instructor_fullname = e.target.value
                               }
                        />
                    </div>
                    <div className="detail-container">
                        <div className="photo-container">
                            <div className="photo-box">
                                <img id={"img-instructor"}
                                     src={icons.user_photo}
                                     alt="Instructor"
                                />
                                <p id={"txt-remove"}>Remove</p>
                            </div>
                            <button className={"btn-submit"} type={"button"}>Upload</button>
                        </div>
                        <div className="text-container">
                            <div className="info-container">
                                <input type="email" id="txt-email"
                                       placeholder={"Instructor Email"}
                                       onChange={
                                           (e) => {
                                               instructorData.instructor_email = e.target.value
                                           }
                                       }
                                />
                                <input type="tel" id="txt-phone"
                                       placeholder={"Instructor Phone Number"}
                                       onChange={
                                           (e) => {
                                               instructorData.instructor_phone = e.target.value
                                           }
                                       }
                                />
                                <input type="text" id="txt-course-code"
                                       placeholder={"Review Course Code"}
                                       onChange={
                                           (e) => {
                                               instructorData.course_code = e.target.value
                                           }
                                       }
                                />
                            </div>
                            <div className="review-container">
                                <textarea name="txt-review" id="txt-review" cols="30" rows="10"
                                          placeholder={"Write your review..."}
                                          onChange={(e) => {
                                              instructorData.review_text = e.target.value;
                                          }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <Link to={"../"}>
                            <button id="btn-cancel" className={"btn-cancel"}>Cancel</button>
                        </Link>
                        <button id="btn-reset" className={"btn-reset"}
                                onClick={resetOnClick}
                        >
                            Reset
                        </button>
                        <button id="btn-submit"
                                className={"btn-submit"}
                                onClick={postInstructorOnClick}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInstructor;