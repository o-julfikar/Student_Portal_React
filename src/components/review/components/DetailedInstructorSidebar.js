import React, {useState} from "react";
import icons from "../../../icons/Icons";

const DetailedInstructorSidebar = () => {
    const [starPoint, setStarPoint] = useState(0);

    return (
        <div className="detailed-instructor-sidebar">
            <button id="btn-isb-back">Back</button>
            <img src={icons.user_photo} alt="" id="img-isb-review"/>
            <p id="instructor-name">
                Test
            </p>
            <p id="instructor-initial">
                Test
            </p>
            <div className="stars-container">
                <img src={starPoint >= 1 ? icons.star_yellow : icons.star_gray} alt="Star 1"/>
                <img src={starPoint >= 2 ? icons.star_yellow : icons.star_gray} alt="Star 2"/>
                <img src={starPoint >= 3 ? icons.star_yellow : icons.star_gray} alt="Star 3"/>
                <img src={starPoint >= 4 ? icons.star_yellow : icons.star_gray} alt="Star 4"/>
                <img src={starPoint >= 5 ? icons.star_yellow : icons.star_gray} alt="Star 5"/>
            </div>
            <p id="stars-count">0 of 5 Stars</p>
            <p id="review-count">0K</p>
            <div className="table-container">
                <div className="table-scroll">
                    <table className="table-review-courses">

                    </table>
                </div>
            </div>
            <button id="btn-review">Review</button>
        </div>
    )
}

export default DetailedInstructorSidebar;