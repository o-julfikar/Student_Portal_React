import "../../styles/review/Review.css"
import React, {useEffect, useState} from "react";
import ReviewSneakCard from "./components/ReviewSneakCard";
import {Route, Routes, useLocation} from "react-router";
import {Link} from "react-router-dom";
import AddInstructor from "./components/AddInstructor";
import DetailedReview from "./components/DetailedReview";
import DetailedInstructorSidebar from "./components/DetailedInstructorSidebar";
import {methods, urls} from "../SPApi";

const Review = (props) => {
    const location = useLocation();
    const [instructorInitials, setInstructorInitials] = useState([]);

    useEffect(() => {
        fetch(urls.get_instructor_initials, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setInstructorInitials(data)
                }
                // console.log(data)
            }).then(errors => {
            console.log(errors);
        })
    }, [location])

    props.customNav(1);
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"review"}>
                <Routes>
                    <Route path={""} element={
                        <div className="review-cards">
                            {
                                instructorInitials && instructorInitials.map((item, i) => (
                                    <ReviewSneakCard key={i} instructor_initial={item}/>
                                ))
                            }
                        </div>
                    }/>
                    <Route path={"add-instructor"} element={
                        <AddInstructor/>
                    }/>
                    <Route path={"instructor/:instructor_initial/*"} element={
                        <DetailedReview/>
                    }/>
                </Routes>
                <div className={"review-sidebar"}>
                    <Routes>
                        <Route path={""} element={
                            <Link to={"add-instructor"}>
                                <button>Add Instructor</button>
                            </Link>
                        }/>
                        <Route path={"instructor/:instructor_initial/*"} element={
                            <DetailedInstructorSidebar/>
                        }/>
                    </Routes>
                </div>

            </div>
        </div>
    )
}

export default Review;