import "../../styles/review/Review.css"
import React from "react";
import icons from "../../icons/Icons";
import ReviewCard from "./components/ReviewCard";

const Review = () => {
    return (
        <div className={"review"}>
            <div className={"review-sidebar"}>
                <button>Add Instructor</button>
            </div>
            <div className="review-cards">
                <ReviewCard faculty_photo = {icons.user_photo} faculty_name = "Abu Hasnayen Zillanee Ornil"
                            faculty_initial = "AHN" review_point = "3.41"
                            sneakCards = {[
                                {
                                    sneak_course: "CSE110",
                                    sneak_content: "It was wonderful experience to learn the basics of Python from him..."
                                },
                                {
                                    sneak_course: "CSE321",
                                    sneak_content: "If it was not him, I would never be able to understand the basics of Oper..."
                                },
                                {
                                    sneak_course: "CSE421",
                                    sneak_content: "Networking won’t be the same without his guidan..."
                                }
                            ]}
                />
                <ReviewCard faculty_photo = {icons.user_photo} faculty_name = "Md. Shahriyar Hossain Shihab"
                            faculty_initial = "HAB" review_point = "3.16"
                            sneakCards = {[
                                {
                                    sneak_course: "ENG102",
                                    sneak_content: "I couldn’t even write my name properly before attending his classes..."
                                },
                                {
                                    sneak_course: "CSE321",
                                    sneak_content: "Operation System is an important part of Computer, so is he for the co..."
                                }
                            ]}
                />
                <ReviewCard faculty_photo = {icons.user_photo} faculty_name = "Sayed Md. Rahmat Ullah Afsan"
                            faculty_initial = "SRA" review_point = "2.38"
                            sneakCards = {[
                                {
                                    sneak_course: "ARC609",
                                    sneak_content: "Was so afraid to take this 600 level course. But now I am..."
                                },
                                {
                                    sneak_course: "BUS201",
                                    sneak_content: "I have started my own startup from midterm and it’s bloo..."
                                },
                                {
                                    sneak_course: "PHY112",
                                    sneak_content: "Never understand electromagnetism lik..."
                                }
                            ]}
                />
                <ReviewCard faculty_photo = {icons.user_photo} faculty_name = "Md. Imtiyaz Bhiyan"
                            faculty_initial = "MIB" review_point = "2.38"
                            sneakCards = {[
                                {
                                    sneak_course: "BIO101",
                                    sneak_content: "I can literally feel all cells of my body after doing the cour..."
                                },
                                {
                                    sneak_course: "CSE341",
                                    sneak_content: "I designed the new Apple M1 Max chip after doing this c..."
                                },
                                {
                                    sneak_course: "POL101",
                                    sneak_content: "I am now a Finance Minister in Kingdom..."
                                }
                            ]}
                />
            </div>
        </div>
    )
}

export default Review;