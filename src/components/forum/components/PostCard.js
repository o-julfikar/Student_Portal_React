import "../../../styles/forum/PostCard.css"
import React, {useEffect, useState} from "react";
import user_picture from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg";
import InteractionBox from "./InteractionBox";
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";


const PostCard = (props) => {
    const [comments, setComments] = useState([]);
    const [refreshComments, setRefreshComments] = useState(true);

    useEffect(() => {
        fetch(urls.get_comment + props.post_id, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setComments(data)
                }
            })
    }, [props.post_id, refreshComments])

    function create_comment(comment_data) {
        console.log(methods.post(comment_data).body)
        fetch(urls.create_comment, methods.post(comment_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshComments(!refreshComments);
                }
            })
    }

    return (
        <div className={"post-card"} id={"post_card-" + props.post_id}>
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
                            props.post_course && props.post_semester?
                                props.post_course + " - " + props.post_semester : props.post_course?
                                props.post_course : props.post_semester? props.post_semester : "General Post"}</p>
                        <p className={"pc-head-post-date"}>{props.post_date}</p>
                    </div>
                </div>
                <img className={"pc-header-more-button"} src={more_button} alt={"More Button"}/>
            </div>
            <div className={"pc-content"}>
                <p>{props.post_content}</p>
            </div>
            <InteractionBox post_id={props.post_id} post_reaction_count = {props.post_reaction_count}
                            post_comment_count = {props.post_comment_count} cd_data ={props.cd_data}
                            functions={{
                                create_comment: create_comment,
                            }}
                            states={{
                                comments: comments,
                                refreshComments: refreshComments,
                                setRefreshComments: setRefreshComments,
                            }}
            />
        </div>
    );
};

export default PostCard;