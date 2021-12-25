import "../../../styles/swap/StudySwapCard.css"
import React from "react";
import {RightArrowIco} from "../../../icons/IconsSelect";
import icons from "../../../icons/Icons";

const StudySwapCard = (props) => {
    return (
        <div className="stud-swap-card">
            <div className="provider-container">
                <img src={props.teacher_photo? props.teacher_photo : icons.user_photo} alt="Provider"/>
                <p>{props.teacher_name}</p>
            </div>
            <div className="course-container">
                <h2>{props.course_code}</h2>
                <RightArrowIco />
                <p>{props.study_slot}</p>
            </div>
            <div className="receiver-container">
                <img src={props.learner_photo? props.learner_photo : icons.user_photo} alt="Receiver"/>
                <p>{props.learner_name}</p>
            </div>
        </div>
    );
}

export default StudySwapCard;