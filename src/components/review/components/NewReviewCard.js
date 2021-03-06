import "../../../styles/review/NewReviewCard.css"
import React, {useEffect, useMemo, useState} from "react";
import icons from "../../../icons/Icons";
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import {useNavigate} from "react-router";


const NewReviewCard = (props) => {
    const navigate = useNavigate();
    const [starPoint, setStarPoint] = useState(0);
    const [activeStarPoint, setActiveStarPoint] = useState(0)
    const [hoverStarPoint, setHoverStarPoint] = useState(0)
    const reviewData = useMemo(() => {
        return ({
            course_code: null,
            review_text: null,
            review_points: null,
            instructor_initial: props.instructor_initial && props.instructor_initial,
        })
    }, [props.instructor_initial])

    useEffect(() => {
        reviewData.review_points = starPoint;
    }, [reviewData, starPoint])

    useEffect(() => {
        if (hoverStarPoint === 0) {
            setStarPoint(activeStarPoint)
        } else {
            setStarPoint(hoverStarPoint)
        }
    }, [hoverStarPoint, activeStarPoint])

    function postReviewOnClick() {
        fetch(urls.post_review, methods.post(reviewData))
            .then(r => r.json())
            .then(data => {
                if (data > 0) {
                    navigate("..");
                } else if (data === -3) {
                    alert("You can submit a review about an instructor only once per course.")
                } else {
                    alert("Failed to submit the review. Please try again later.")
                }
            })
    }

    return (
        <div className="new-review-card">
            <div className="top-div">
                <Link to={".."}>
                    <button id="btn-submit" className={"btn-cancel"}>Back</button>
                </Link>
                <input type="text" id="txt-course-code"
                       placeholder={"Course Code"}
                       onChange={(e) =>
                           reviewData.course_code = e.target.value
                       }
                />
                <button id="btn-submit"
                        className={"btn-submit"}
                        onClick={postReviewOnClick}
                >
                    Submit
                </button>
            </div>
            <div className="stars-container">
                <img src={starPoint >= 1 ? icons.star_yellow : icons.star_gray}
                     alt="Star 1"
                     onMouseEnter={() => setHoverStarPoint(1)}
                     onMouseLeave={() => setHoverStarPoint(0)}
                     onClick={() => activeStarPoint === 1 ? setActiveStarPoint(0) : setActiveStarPoint(1)}
                />
                <img src={starPoint >= 2 ? icons.star_yellow : icons.star_gray}
                     alt="Star 2"
                     onMouseEnter={() => setHoverStarPoint(2)}
                     onMouseLeave={() => setHoverStarPoint(0)}
                     onClick={() => activeStarPoint === 2 ? setActiveStarPoint(0) : setActiveStarPoint(2)}
                />
                <img src={starPoint >= 3 ? icons.star_yellow : icons.star_gray}
                     alt="Star 3"
                     onMouseEnter={() => setHoverStarPoint(3)}
                     onMouseLeave={() => setHoverStarPoint(0)}
                     onClick={() => activeStarPoint === 3 ? setActiveStarPoint(0) : setActiveStarPoint(3)}
                />
                <img src={starPoint >= 4 ? icons.star_yellow : icons.star_gray}
                     alt="Star 4"
                     onMouseEnter={() => setHoverStarPoint(4)}
                     onMouseLeave={() => setHoverStarPoint(0)}
                     onClick={() => activeStarPoint === 4 ? setActiveStarPoint(0) : setActiveStarPoint(4)}
                />
                <img src={starPoint >= 5 ? icons.star_yellow : icons.star_gray}
                     alt="Star 5"
                     onMouseEnter={() => setHoverStarPoint(5)}
                     onMouseLeave={() => setHoverStarPoint(0)}
                     onClick={() => activeStarPoint === 5 ? setActiveStarPoint(0) : setActiveStarPoint(5)}
                />
            </div>
            <textarea name="txt-review-text" id="txt-review-text" cols="30" rows="10"
                      placeholder={"Write your valuable feedback..."}
                      onChange={(e) => {
                          reviewData.review_text = e.target.value;
                      }}
            />
        </div>
    )
}

export default NewReviewCard;