import "../../../styles/swap/SectionSwapCard.css"
import React from "react";
import {RightArrowIco} from "../../../icons/IconsSelect";
import icons from "../../../icons/Icons";

const SectionSwapCard = (props) => {
    return (
        <div className="sec-swap-card">
            <div className="provider-container">
                <img src={props.provider_photo? props.provider_photo : icons.user_photo} alt="Provider"/>
                <p>{props.provider_name}</p>
            </div>
            <div className="section-container">
                <h2>{props.course_code}</h2>
                <RightArrowIco />
                <p>Section {props.section_number}</p>
            </div>
            <div className="receiver-container">
                <img src={props.recipient_photo? props.recipient_photo : icons.user_photo} alt="Receiver"/>
                <p>{props.recipient_name}</p>
            </div>
        </div>
    );
}

export default SectionSwapCard;