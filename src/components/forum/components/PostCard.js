import "../../../styles/forum/PostCard.css"
import React from "react";
import user_picture from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg";
import InteractionBox from "./InteractionBox";
import {Link} from "react-router-dom";


const PostCard = (props) => {
    return (
        <div className={"post-card"}>
            <div className={"pc-header"}>
                <div className={"pc-head-left"}>
                    <Link to={`/profile/${props.bracu_id}`}>
                        <img src={user_picture} alt={"Default"} />
                    </Link>
                    <div className={"pc-header-info"}>
                        <Link to={`/profile/${props.bracu_id}`}>
                            <p className={"pc-head-username"}>{props.user_name}</p>
                        </Link>
                        <p className={"pc-head-semester"}>{
                            props.course && props.semester?
                                props.course + " - " + props.semester : props.course?
                                props.course : props.semester? props.semester : "General Post"}</p>
                        <p className={"pc-head-post-date"}>{props.post_date}</p>
                    </div>
                </div>
                <img className={"pc-header-more-button"} src={more_button} alt={"More Button"}/>
            </div>
            <div className={"pc-content"}>
                <p>{props.content}</p>
            </div>
            <InteractionBox reaction_count = {props.reaction_count} comment_count = {props.comment_count}
                            cd_data ={props.cd_data}/>
        </div>
    );
};

export default PostCard;