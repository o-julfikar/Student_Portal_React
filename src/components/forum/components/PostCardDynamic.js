import "../../../styles/forum/PostCard.css"
import React, {useContext, useEffect, useState} from "react";
import user_picture from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg";
import InteractionBox from "./InteractionBox";
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import {useParams} from "react-router";
import PostCardDynamicContext from "../../../contexts/forum/PostCardDynamicContext";
import {formatDateTime} from "../../Utility";


const PostCardDynamic = (props) => {
    const { post_id } = useParams();

    const [postCardDynamic] = useContext(PostCardDynamicContext).postCardDynamicOnly;
    const [setPostCardId] = useContext(PostCardDynamicContext).setPostCardIdOnly;
    const [refreshPost, setRefreshPost] = useContext(PostCardDynamicContext).refreshPost;

    setPostCardId(parseInt(post_id));

    const [refreshComments, setRefreshComments] = useState(true);
    const [comments, setComments] = useState([]);

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

    useEffect(() => {
        fetch(urls.get_comment + post_id, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setComments(data)
                }
            })
    }, [post_id, refreshComments])

    return (
        <div className={"post-card"} id={"post_card-" + postCardDynamic.post_id}>
            <div className={"pc-header"}>
                <div className={"pc-head-left"}>
                    <Link to={`/profile/${postCardDynamic.author_bracu_id}`}>
                        <img src={postCardDynamic.author_photo? postCardDynamic.author_photo : user_picture} alt={"Default"} />
                    </Link>
                    <div className={"pc-header-info"}>
                        <Link to={`/profile/${postCardDynamic.author_bracu_id}`}>
                            <p className={"pc-head-username"}>{postCardDynamic.author_name}</p>
                        </Link>
                        <p className={"pc-head-semester"}>{
                            postCardDynamic.post_course && postCardDynamic.post_semester?
                                postCardDynamic.post_course + " - " + postCardDynamic.post_semester : postCardDynamic.post_course?
                                postCardDynamic.post_course : postCardDynamic.post_semester? postCardDynamic.post_semester : "General Post"}</p>
                        <Link to={`/forum/post/${postCardDynamic.post_id}`}>
                            <p className={"pc-head-post-date"}>{formatDateTime(postCardDynamic.date_created)}</p>
                        </Link>
                    </div>
                </div>
                <img className={"pc-header-more-button"} src={more_button} alt={"More Button"}/>
            </div>
            <div className={"pc-content"}>
                <p>{postCardDynamic.post_content}</p>
            </div>
            <InteractionBox post_id={postCardDynamic.post_id} post_reaction_count = {postCardDynamic.post_reactions.count}
                            post_comment_count = {postCardDynamic.post_comments.count}
                            refreshPost={[refreshPost, setRefreshPost]}
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

export default PostCardDynamic;