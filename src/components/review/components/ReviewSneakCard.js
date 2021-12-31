import "../../../styles/review/ReviewSneakCard.css"
import React, {useEffect, useState} from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import ReviewSneakRow from "./ReviewSneakRow";

const ReviewSneakCard = (props) => {

    const [sneakCard, setSneakCard] = useState({})
    console.log(props.instructor_initial)

    useEffect(() => {
        fetch(urls.get_instructor_sneak_card + "/" + props.instructor_initial, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setSneakCard(data);
                }
                console.log(data)
            }).catch(errors => {
            console.log(errors);
        })
    }, [props.instructor_initial])

    // let stars = [], sneakCardss = [];
    // for (let i = 0; i < Math.ceil(props.review_point); i++) stars.push(<img key={i} src={icons.star_yellow}
    //                                                                         alt={"Bright Star"}/>)
    // for (let i = stars.length - 1; i < 4; i++) stars.push(<img key={i + 1} src={icons.star_gray} alt={"Dull Star"}/>)
    // for (let i = 0; i < props.sneakCards.length; i++) sneakCardss.push(<ReviewSneakRow key={i}
    //                                                                                   sneak_data={props.sneakCards[i]}/>);
    return (
        <div className={"review-sneak-card"}>
            <div className="rc-left">
                <img src={sneakCard.instructor_photo ? sneakCard.instructor_photo : icons.user_photo} alt="Faculty"/>
                <div className="rc-stars">
                    <img src={sneakCard.instructor_review_points >= 1 ? icons.star_yellow : icons.star_gray} alt="Star 1"/>
                    <img src={sneakCard.instructor_review_points >= 2 ? icons.star_yellow : icons.star_gray} alt="Star 2"/>
                    <img src={sneakCard.instructor_review_points >= 3 ? icons.star_yellow : icons.star_gray} alt="Star 3"/>
                    <img src={sneakCard.instructor_review_points >= 4 ? icons.star_yellow : icons.star_gray} alt="Star 4"/>
                    <img src={sneakCard.instructor_review_points >= 5 ? icons.star_yellow : icons.star_gray} alt="Star 5"/>
                </div>
                <Link to={`instructor/${sneakCard.instructor_initials && sneakCard.instructor_initials[0]}/new-review`}>
                    <button>Review</button>
                </Link>
            </div>
            <div className="rc-right">
                <h2 className="faculty-name">{sneakCard && sneakCard.instructor_fullname}</h2>
                <h3 className="faculty-initial">{sneakCard.instructor_initials && sneakCard.instructor_initials.join(", ")}</h3>
                <div className="rc-sneak">
                    {
                        sneakCard.instructor_reviews && sneakCard.instructor_reviews.map((item, i) => (
                            <ReviewSneakRow course_code={item.review_course_code} review_text={item.review_text}/>
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