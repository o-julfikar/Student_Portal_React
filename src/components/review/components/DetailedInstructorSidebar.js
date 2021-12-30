import "../../../styles/review/DetailedInstructorSidebar.css";
import React, {useState} from "react";
import icons from "../../../icons/Icons";
import {Link} from "react-router-dom";
import NewReviewCard from "./NewReviewCard";

const DetailedInstructorSidebar = () => {
    const [openNewReview, setOpenNewReview] = useState(false);
    const [starPoint, setStarPoint] = useState(0);
    const [reviewedCourses, setReviewedCourses] = useState([
        "CSE110",
        "CSE111",
        "CSE220",
        "CSE111",
        "CSE220",
        "CSE111",
        "CSE220",
        "CSE111",
        "CSE220",
        "CSE111",
        "CSE220",
        "CSE111",
        "CSE220",
        "CSE111",
        "CSE220"
    ]);
    const [activeReviewedCourses, setActiveReviewedCourses] = useState([

    ])

    return (
        <div className="detailed-instructor-sidebar">
            <Link to={".."}>
                <button id="btn-isb-back" className={"btn-back"}>Back</button>
            </Link>
            <img src={icons.user_photo}
                 alt="Instructor"
                 className={"img-instructor"}
                 id="img-isb-review"
            />
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
            <p id="review-count">0</p>
            <div className="table-container">
                <div className="table-scroll">
                    <table className="table-review-courses">
                        <thead>
                            <tr>
                                <td>Courses</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (() => {
                                    if (reviewedCourses && reviewedCourses.length > 0) {
                                        return reviewedCourses.map((item, i) => (
                                            <tr key={i}
                                                id={'tr-isb-' + i}
                                                className={'row-isb' + (activeReviewedCourses.includes(item)?
                                                    " active" : "")}
                                            >
                                                <td id={"td-isb-course-" + i}>{item}</td>
                                            </tr>
                                        ))
                                    }
                                })()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to={"new-review"}>

            <button
                className={"btn-submit"}
                id="btn-review"
            >
                Review
            </button>
            </Link>
        </div>
    )
}

export default DetailedInstructorSidebar;