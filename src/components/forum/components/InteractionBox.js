import React from "react";
import comment_outline from "../../../icons/comment-outline.svg"
import reaction from "../../../icons/reaction.svg"
import CommentCard from "./CommentCard";
import "../../../styles/forum/InteractionBox.css"

const InteractionBox = (props) => {

    function newCommentOnClick(event) {
        let txtNewComment = document.getElementById("txt-new-comment-" + props.post_id);
        let comment_data = {
            post_id: props.post_id,
            comment_content: txtNewComment.value,
        }
        props.functions.create_comment(comment_data);
        txtNewComment.value = "";
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
                    <img src={reaction} alt={"Reaction"}/>
                </div>
                <div className={"i-comment"}>
                    <img src={comment_outline} alt={"Comment"}/>
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