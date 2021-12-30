import "../../../styles/review/ReviewSneakCard.css"
import React from "react";
import icons from "../../../icons/Icons"
import ReviewSneakRow from "./ReviewSneakRow";
import {Link} from "react-router-dom";

const ReviewSneakCard = (props) => {
    let stars = [], sneakCards = [];
    for (let i = 0; i < Math.ceil(props.review_point); i++) stars.push(<img key={i} src={icons.star_yellow}
                                                                            alt={"Bright Star"}/>)
    for (let i = stars.length - 1; i < 4; i++) stars.push(<img key={i + 1} src={icons.star_gray} alt={"Dull Star"}/>)
    for (let i = 0; i < props.sneakCards.length; i++) sneakCards.push(<ReviewSneakRow key={i}
                                                                                      sneak_data={props.sneakCards[i]}/>);
    return (
        <div className={"review-sneak-card"}>
            <div className="rc-left">
                <img src={props.faculty_photo} alt="Faculty"/>
                <div className="rc-stars">
                    {stars}
                </div>
                <Link to={`instructor/${props.faculty_initial}/new-review`}>
                    <button>Review</button>
                </Link>
            </div>
            <div className="rc-right">
                <h2 className="faculty-name">{props.faculty_name}</h2>
                <h3 className="faculty-initial">{props.faculty_initial}</h3>
                <div className="rc-sneak">
                    {sneakCards}
                    <Link to={"instructor/" + props.faculty_initial}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewSneakCard;