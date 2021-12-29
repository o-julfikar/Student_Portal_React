import "../../../styles/review/AddInstructor.css"
import React, {useEffect, useState} from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";


const AddInstructor = () => {
    const [starPoint, setStarPoint] = useState(0);
    const [activeStarPoint, setActiveStarPoint] = useState(0)
    const [hoverStarPoint, setHoverStarPoint] = useState(0)

    useEffect(() => {
        if (hoverStarPoint === 0) {
            setStarPoint(activeStarPoint)
        } else {
            setStarPoint(hoverStarPoint)
        }
    }, [hoverStarPoint, activeStarPoint])

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
                        <input type="text" id="txt-initial" placeholder={"Instructor Initial"}/>
                        <input type="text" id="txt-fullname" placeholder={"Instructor Fullname"}/>
                    </div>
                    <div className="detail-container">
                        <div className="photo-container">
                            <div className="photo-box">
                                <img id={"img-instructor"} src={icons.user_photo} alt="Instructor Photo"/>
                                <p id={"txt-remove"}>Remove</p>
                            </div>
                            <button className={"btn-submit"} type={"button"}>Upload</button>
                        </div>
                        <div className="text-container">
                            <div className="info-container">
                                <input type="email" id="txt-email" placeholder={"Instructor Email"}/>
                                <input type="tel" id="txt-phone" placeholder={"Instructor Phone Number"}/>
                                <input type="text" id="txt-course-code" placeholder={"Review Course Code"}/>
                            </div>
                            <div className="review-container">
                                <textarea name="txt-review" id="txt-review" cols="30" rows="10"
                                          placeholder={"Write your review..."}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <Link to={"../"}>
                            <button id="btn-cancel" className={"btn-cancel"}>Cancel</button>
                        </Link>
                        <button id="btn-reset" className={"btn-reset"}>Reset</button>
                        <button id="btn-submit" className={"btn-submit"}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInstructor;