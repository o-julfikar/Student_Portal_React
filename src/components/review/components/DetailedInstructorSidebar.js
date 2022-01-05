import "../../../styles/review/DetailedInstructorSidebar.css";
import React, {useEffect, useState} from "react";
import icons from "../../../icons/Icons";
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import {useLocation, useParams} from "react-router";

const DetailedInstructorSidebar = () => {
    const location = useLocation();
    const {instructor_initial} = useParams();
    const [starPoint, setStarPoint] = useState(0)
    const [instructorInfo, setInstructorInfo] = useState({
        instructor_initials: [
            null
        ],
        instructor_fullname: null,
        instructor_photo: null,
        instructor_emails: [
            null
        ],
        instructor_phones: [
            null
        ],
        instructor_review_points: null,
        instructor_total_reviews: null
    })
    const [reviewedCourses, setReviewedCourses] = useState([]);
    const [activeReviewedCourses, setActiveReviewedCourses] = useState([])

    useEffect(() => {
        fetch(`${urls.get_instructor_info}/${instructor_initial}`, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setInstructorInfo(data)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [instructor_initial, location])
    
    useEffect(() => {
        setStarPoint(instructorInfo.instructor_review_points)
    }, [instructorInfo.instructor_review_points])

    useEffect(() => {
        fetch(`${urls.get_instructor_courses}/${instructor_initial}`, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setReviewedCourses(data)
                } else {
                    setReviewedCourses([])
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [instructor_initial, location])

    function addRemoveCourse(courseCode) {
        if (activeReviewedCourses.includes(courseCode)) {
            for (let i = 0; i < activeReviewedCourses.length; i++) {
                if (activeReviewedCourses[i] === courseCode) {
                    activeReviewedCourses.splice(i, 1);
                }
            }
            setActiveReviewedCourses([...activeReviewedCourses])
        } else {
            setActiveReviewedCourses(prev => [...prev, courseCode])
        }
    }

    return (
        <div className="detailed-instructor-sidebar">
            <Link to={".."}>
                <button id="btn-isb-back" className={"btn-back"}>Back</button>
            </Link>
            <img className={"img-instructor"}
                 id="img-isb-review"
                 src={instructorInfo.instructor_photo? instructorInfo.instructor_photo : icons.user_photo}
                 alt="Instructor"
            />
            <p id="instructor-name">
                {instructorInfo.instructor_fullname}
            </p>
            {instructorInfo.instructor_initials.map((initial, i) => (
                <p key={i}
                   id={"instructor-initial-" + i}
                >
                    {initial}
                </p>
            ))}
            <div className="stars-container">
                <img src={starPoint >= 1 ? icons.star_yellow : icons.star_gray} alt="Star 1"/>
                <img src={starPoint >= 2 ? icons.star_yellow : icons.star_gray} alt="Star 2"/>
                <img src={starPoint >= 3 ? icons.star_yellow : icons.star_gray} alt="Star 3"/>
                <img src={starPoint >= 4 ? icons.star_yellow : icons.star_gray} alt="Star 4"/>
                <img src={starPoint >= 5 ? icons.star_yellow : icons.star_gray} alt="Star 5"/>
            </div>
            <p id="stars-count">{instructorInfo.instructor_review_points} of 5 Stars</p>
            <p id="review-count">From {instructorInfo.instructor_total_reviews} reviews</p>
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
                                                className={'row-isb' + (activeReviewedCourses.includes(item) ?
                                                    " active" : "")}
                                                onClick={() => addRemoveCourse(item)}
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