import "../../../styles/review/ReviewSneakCard.css"
import React, {useEffect, useState} from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import ReviewSneakRow from "./ReviewSneakRow";

const ReviewSneakCard = (props) => {

    const [sneakCard, setSneakCard] = useState({
        "instructor_initials": [],
        "instructor_fullname": null,
        "instructor_photo": null,
        "instructor_emails": [],
        "instructor_phones": [],
        "instructor_review_points": null,
        "instructor_total_reviews": null,
        "instructor_reviews": [
            {
                "review_id": null,
                "review_course_code": null,
                "review_points": null,
                "review_text": null,
            }
        ]
    })

    useEffect(() => {
        fetch(urls.get_instructor_sneak_card + "/" + props.instructor_initial, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setSneakCard(data);
                }
            }).catch(errors => {
            console.log(errors);
        })
    }, [props.instructor_initial])

    return (
        <div className={"review-sneak-card"}>
            <div className="rc-left">
                <Link to={"instructor/" + (sneakCard.instructor_initials && sneakCard.instructor_initials[0])}>
                    <img src={sneakCard.instructor_photo ? sneakCard.instructor_photo : icons.user_photo}
                         className={"img-instructor"}
                         alt="Faculty"
                    />
                </Link>
                <div className="rc-stars">
                    <img src={sneakCard.instructor_review_points >= 1 ? icons.star_yellow : icons.star_gray}
                         alt="Star 1"/>
                    <img src={sneakCard.instructor_review_points >= 2 ? icons.star_yellow : icons.star_gray}
                         alt="Star 2"/>
                    <img src={sneakCard.instructor_review_points >= 3 ? icons.star_yellow : icons.star_gray}
                         alt="Star 3"/>
                    <img src={sneakCard.instructor_review_points >= 4 ? icons.star_yellow : icons.star_gray}
                         alt="Star 4"/>
                    <img src={sneakCard.instructor_review_points >= 5 ? icons.star_yellow : icons.star_gray}
                         alt="Star 5"/>
                </div>
                <Link to={`instructor/${sneakCard.instructor_initials && sneakCard.instructor_initials[0]}/new-review`}>
                    <button>Review</button>
                </Link>
            </div>
            <div className="rc-right">
                <Link to={`instructor/${sneakCard.instructor_initials && sneakCard.instructor_initials[0]}`}>
                    <h2 className="faculty-name"
                    >
                        {sneakCard && sneakCard.instructor_fullname}
                    </h2>
                    <h3 className="faculty-initial">{sneakCard.instructor_initials && sneakCard.instructor_initials.join(", ")}</h3>
                </Link>
                <div className="rc-sneak">
                    {
                        sneakCard.instructor_reviews && sneakCard.instructor_reviews.map((item, i) => (
                            <ReviewSneakRow key={i}
                                            course_code={item.review_course_code}
                                            review_text={item.review_text}
                            />
                        ))
                    }
                    <Link to={"instructor/" + (sneakCard.instructor_initials && sneakCard.instructor_initials[0])}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewSneakCard;