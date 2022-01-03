import "../../styles/review/Review.css"
import React, {useEffect, useState} from "react";
import icons from "../../icons/Icons";
import ReviewSneakCard from "./components/ReviewSneakCard";
import {Routes, Route, useLocation} from "react-router";
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
                console.log(data)
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
                                    <ReviewSneakCard instructor_initial={item}/>
                                ))
                            }

                            {/*<ReviewSneakCard faculty_photo={icons.user_photo} faculty_name="Abu Hasnayen Zillanee Ornil"*/}
                            {/*                 faculty_initial="AHN" review_point="3.41"*/}
                            {/*                 sneakCards={[*/}
                            {/*                {*/}
                            {/*                    sneak_course: "CSE110",*/}
                            {/*                    sneak_content: "It was wonderful experience to learn the basics of Python from him..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "CSE321",*/}
                            {/*                    sneak_content: "If it was not him, I would never be able to understand the basics of Oper..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "CSE421",*/}
                            {/*                    sneak_content: "Networking won’t be the same without his guidan..."*/}
                            {/*                }*/}
                            {/*            ]}*/}
                            {/*/>*/}
                            {/*<ReviewSneakCard faculty_photo={icons.user_photo} faculty_name="Md. Shahriyar Hossain Shihab"*/}
                            {/*                 faculty_initial="HAB" review_point="3.16"*/}
                            {/*                 sneakCards={[*/}
                            {/*                {*/}
                            {/*                    sneak_course: "ENG102",*/}
                            {/*                    sneak_content: "I couldn’t even write my name properly before attending his classes..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "CSE321",*/}
                            {/*                    sneak_content: "Operation System is an important part of Computer, so is he for the co..."*/}
                            {/*                }*/}
                            {/*            ]}*/}
                            {/*/>*/}
                            {/*<ReviewSneakCard faculty_photo={icons.user_photo} faculty_name="Sayed Md. Rahmat Ullah Afsan"*/}
                            {/*                 faculty_initial="SRA" review_point="2.38"*/}
                            {/*                 sneakCards={[*/}
                            {/*                {*/}
                            {/*                    sneak_course: "ARC609",*/}
                            {/*                    sneak_content: "Was so afraid to take this 600 level course. But now I am..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "BUS201",*/}
                            {/*                    sneak_content: "I have started my own startup from midterm and it’s bloo..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "PHY112",*/}
                            {/*                    sneak_content: "Never understand electromagnetism lik..."*/}
                            {/*                }*/}
                            {/*            ]}*/}
                            {/*/>*/}
                            {/*<ReviewSneakCard faculty_photo={icons.user_photo} faculty_name="Md. Imtiyaz Bhiyan"*/}
                            {/*                 faculty_initial="MIB" review_point="2.38"*/}
                            {/*                 sneakCards={[*/}
                            {/*                {*/}
                            {/*                    sneak_course: "BIO101",*/}
                            {/*                    sneak_content: "I can literally feel all cells of my body after doing the cour..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "CSE341",*/}
                            {/*                    sneak_content: "I designed the new Apple M1 Max chip after doing this c..."*/}
                            {/*                },*/}
                            {/*                {*/}
                            {/*                    sneak_course: "POL101",*/}
                            {/*                    sneak_content: "I am now a Finance Minister in Kingdom..."*/}
                            {/*                }*/}
                            {/*            ]}*/}
                            {/*/>*/}
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