import React from "react";
import icons from "../../../icons/Icons";

const DetailedInstructorSidebar = () => {
    return (
        <div className="detailed-instructor-sidebar">
            <button id="btn-isb-back">Back</button>
            <img src={icons.user_photo} alt="" id="img-isb-review"/>
        </div>
    )
}

export default DetailedInstructorSidebar;