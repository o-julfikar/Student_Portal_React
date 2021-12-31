import "../../../styles/forum/PostCard.css"
import React, {useEffect, useState} from "react";
import user_picture from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg";
import InteractionBox from "./InteractionBox";
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import {formatDateTime} from "../../Utility";


const PostCard = (props) => {
    const [comments, setComments] = useState([]);
    const [refreshComments, setRefreshComments] = useState(true);
    const [refreshPost, setRefreshPost] = useState(true);
    const [post, setPost] = useState({
        post_id: -1,
        author_bracu_id: -1,
        author_name: "",
        author_photo: "",
        post_course: "",
        post_content: "",
        date_created: "",
        post_semester: "",
        post_reactions: {
            count: 0,
            data: {}
        },
        post_comments: {
            count: 0,
            data: []
        }
    });

    useEffect(() => {
        fetch(urls.get_post_by_id + props.post_id, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setPost(data)
                }
            })
    }, [props.post_id, refreshPost]);

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
                    <Link to={`/profile/${post.author_bracu_id}`}>
                        <img src={post.author_photo? post.author_photo : user_picture} alt={"Default"} />
                    </Link>
                    <div className={"pc-header-info"}>
                        <Link to={`/profile/${post.author_bracu_id}`}>
                            <p className={"pc-head-username"}>{post.author_name}</p>
                        </Link>
                        <p className={"pc-head-semester"}>{
                            post.post_course && post.post_semester?
                                post.post_course + " - " + post.post_semester : post.post_course?
                                post.post_course : post.post_semester? post.post_semester : "General Post"}</p>
                        <Link to={`/forum/post/${props.post_id}`}>
                            <p className={"pc-head-post-date"}>{formatDateTime(post.date_created)}</p>
                        </Link>
                    </div>
                </div>
                <img className={"pc-header-more-button"} src={more_button} alt={"More Button"}/>
            </div>
            <div className={"pc-content"}>
                <p>{post.post_content}</p>
            </div>
            <InteractionBox post_id={props.post_id} post_reaction_count = {post.post_reactions.count}
                            post_comment_count = {post.post_comments.count} refreshPost={[refreshPost, setRefreshPost]}
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