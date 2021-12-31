import "../../../styles/review/DetailedReview.css"
import React, {useEffect, useState} from "react";
import ReviewCard from "./ReviewCard";
import {Route, Routes, useLocation, useParams} from "react-router";
import NewReviewCard from "./NewReviewCard";
import {methods, urls} from "../../SPApi";

const DetailedReview = () => {
    const location = useLocation();
    const {instructor_initial} = useParams();

    const [reviews, setReviews] = useState([
        {
            review_id: null,
            review_course_code: null,
            review_points: null,
            review_text: null
        }
    ]);

    useEffect(() => {
        fetch(`${urls.get_review}/${instructor_initial}`, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setReviews(data)
                }
            })
    }, [instructor_initial, location])

    return (
        <div className="detailed-review">
            <Routes>
                <Route path={""} element={
                    (() => {
                        if (reviews) {
                            return reviews.map((item, i) => (
                                item.review_id && <ReviewCard key={i}
                                                              courseCode={item.review_course_code}
                                                              reviewPoints={item.review_points}
                                                              reviewText={item.review_text}
                                />
                            ))
                        }
                    })()
                }/>
                <Route path={"new-review"} element={
                    <NewReviewCard instructor_initial={instructor_initial}/>
                }/>
                <Route path={"*"} element={
                    <h1>404: Page not found. Reach me out if you found.</h1>
                }/>
            </Routes>

        </div>
    )
}

export default DetailedReview;