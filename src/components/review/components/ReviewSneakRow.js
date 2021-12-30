import React from "react";
import icons from "../../../icons/Icons"


const ReviewSneakRow = (props) => {
    return (
        <div className={"rc-sneak-card"}>
            <img src={icons.sneak_card_bullet} alt="Sneak card bullet"/>
            <div className="sc-data">
                <p className="sc-course">{props.sneak_data.sneak_course}</p>
                <p className="sc-content">{props.sneak_data.sneak_content}</p>
            </div>
        </div>
    )
}

export default ReviewSneakRow;