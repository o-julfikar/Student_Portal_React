import "../../../styles/review/DetailedReview.css"
import React, {useState} from "react";
import icons from "../../../icons/Icons"
import ReviewCard from "./ReviewCard";
import {Route, Routes} from "react-router";
import NewReviewCard from "./NewReviewCard";

const DetailedReview = () => {

    const [reviews, setReviews] = useState([
        {
            review_course_code: "CSE110",
            review_points: 3,
            review_text: "Sample review"
        }, {
            review_course_code: "CSE111",
            review_points: 2,
            review_text: "Sample review II"
        }, {
            review_course_code: "CSE110",
            review_points: 1,
            review_text: "Sample review III"
        }
    ]);

    return (
        <div className="detailed-review">
            <Routes>
                <Route path={""} element={
                    (() => {
                        if (reviews) {
                            return reviews.map((item, i) => (
                                <ReviewCard
                                    courseCode={item.review_course_code}
                                    reviewPoints={item.review_points}
                                    reviewText={item.review_text}
                                />
                            ))
                        }
                    })()
                }/>
                <Route path={"new-review"} element={
                    <NewReviewCard/>
                }/>
                <Route path={"*"} element={
                    <h1>404: Page not found. Reach me out if you found.</h1>
                }/>
            </Routes>

        </div>
    )
}

export default DetailedReview;