import "../../../styles/swap/SectionSwapCard.css"
import React from "react";
import {RightArrowIco} from "../../../icons/IconsSelect";

const SectionSwapCard = (props) => {
    return (
        <div className="sec-swap-card">
            <div className="provider-container">
                <img src={props.provider_photo} alt="Provider"/>
                <p>{props.provider_name}</p>
            </div>
            <div className="section-container">
                <h2>{props.swap_course}</h2>
                <RightArrowIco />
                <p>Section {props.swap_section}</p>
            </div>
            <div className="receiver-container">
                <img src={props.receiver_photo} alt="Receiver"/>
                <p>{props.receiver_name}</p>
            </div>
        </div>
    );
}

export default SectionSwapCard;