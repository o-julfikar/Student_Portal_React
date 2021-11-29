import "../../../styles/swap/StudySwapCard.css"
import React from "react";
import {RightArrowIco} from "../../../icons/IconsSelect";

const StudySwadCard = (props) => {
    return (
        <div className="stud-swap-card">
            <div className="provider-container">
                <img src={props.provider_photo} alt="Provider"/>
                <p>{props.provider_name}</p>
            </div>
            <div className="course-container">
                <h2>{props.swap_course}</h2>
                <RightArrowIco />
                <p>{props.swap_time} | {props.swap_day}</p>
            </div>
            <div className="receiver-container">
                <img src={props.receiver_photo} alt="Receiver"/>
                <p>{props.receiver_name}</p>
            </div>
        </div>
    );
}

export default StudySwadCard;