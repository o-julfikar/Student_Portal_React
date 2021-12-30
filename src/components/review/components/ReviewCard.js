import "../../../styles/review/ReviewCard.css"
import React from "react";
import icons from "../../../icons/Icons";


const ReviewCard = (props) => {
    return (
        <div className="review-card">
            <div className="rc-header">
                <h3 className="rc-header-course-code" id="txt-rc-header-course-code">
                    {props.courseCode}
                </h3>
                <div className="stars-container">
                    <img src={props.reviewPoints >= 1 ? icons.star_yellow : icons.star_gray} alt="Star 1"/>
                    <img src={props.reviewPoints >= 2 ? icons.star_yellow : icons.star_gray} alt="Star 2"/>
                    <img src={props.reviewPoints >= 3 ? icons.star_yellow : icons.star_gray} alt="Star 3"/>
                    <img src={props.reviewPoints >= 4 ? icons.star_yellow : icons.star_gray} alt="Star 4"/>
                    <img src={props.reviewPoints >= 5 ? icons.star_yellow : icons.star_gray} alt="Star 5"/>
                </div>
            </div>
            <div className="rc-content">
                <p>{props.reviewText}</p>
            </div>
        </div>
    )
}

export default ReviewCard;