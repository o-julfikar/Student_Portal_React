import "../../../styles/review/ReviewCard.css"
import React from "react";
import icons from "../../../icons/Icons"
import RCSneakCard from "./RCSneakCard";

const ReviewCard = (props) => {
    let stars = [], sneakCards = [];
    for (let i = 0; i < Math.ceil(props.review_point); i++) stars.push(<img src={icons.star_yellow} alt={"Bright Star"}/>)
    for (let i = stars.length - 1; i < 4; i++) stars.push(<img src={icons.star_gray} alt={"Dull Star"}/>)
    for (let sneakCard of props.sneakCards) sneakCards.push(<RCSneakCard sneak_data = {sneakCard}/>);
    return (
        <div className={"review-card"}>
            <div className="rc-left">
                <img src={props.faculty_photo} alt="Faculty"/>
                <div className="rc-stars">
                    {stars}
                </div>
                <button>Review</button>
            </div>
            <div className="rc-right">
                <h2 className="faculty-name">{props.faculty_name}</h2>
                <h3 className="faculty-initial">{props.faculty_initial}</h3>
                <div className="rc-sneak">
                    {sneakCards}
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;