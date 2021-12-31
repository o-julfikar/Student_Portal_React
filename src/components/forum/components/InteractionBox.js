import React, {useState} from "react";
import comment_outline from "../../../icons/comment-outline.svg"
import reaction from "../../../icons/reaction.svg"
import CommentCard from "./CommentCard";
import "../../../styles/forum/InteractionBox.css"
import {methods, urls} from "../../SPApi";

const InteractionBox = (props) => {

    const [refreshPost, setRefreshPost] = props.refreshPost

    function newCommentOnClick() {
        let txtNewComment = document.getElementById("txt-new-comment-" + props.post_id);
        let comment_data = {
            post_id: props.post_id,
            comment_content: txtNewComment.value,
        }
        props.functions.create_comment(comment_data);
        txtNewComment.value = "";
    }

    function reactionOnClick() {
        let reaction_data = {
            post_id: props.post_id,
            reaction_tag: "haha",
            reaction_code: 3,
        }
        fetch(urls.create_reaction, methods.post(reaction_data))
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setRefreshPost(!refreshPost);
                }
            }).catch(errors => {
            console.log(errors)
        })
    }

    return (
        <div className={"interaction-box"}>
            <div className={"i-buttons"}>
                <div className={"i-reaction"}>
                    <p>
                        {
                            props.post_reaction_count
                        }
                    </p>
                    <img src={reaction} alt={"Reaction"} onClick={reactionOnClick}/>
                </div>
                <div className={"i-comment"}>
                    <img src={comment_outline} alt={"Comment"}
                         onClick={() => {
                             document.getElementById("txt-new-comment-" + props.post_id).focus();
                         }}
                    />
                    <p>
                        {
                            (() => {
                                if (props.states.comments) {
                                    return (
                                        props.states.comments.count
                                    )
                                } else {
                                    return (
                                        0
                                    )
                                }
                            })()
                        }
                    </p>
                </div>
            </div>
            <div className={"comment-cards"}>
                {
                    (() => {
                        if (props.states.comments && props.states.comments.comments) {
                            return (
                                props.states.comments.comments.map((comment_data, i) => (
                                    <CommentCard key={i} comment_data={comment_data}/>
                                ))
                            )
                        }
                    })()
                }
            </div>
            <div className={"new_comment_box"}>
                <textarea id={"txt-new-comment-" + props.post_id} placeholder={"Write something..."}/>
                <button type={"button"} onClick={newCommentOnClick}>Submit</button>
            </div>
        </div>
    )
}

export default InteractionBox;