import React from "react";
import comment_outline from "../../../icons/comment-outline.svg"
import reaction from "../../../icons/reaction.svg"
import "../../../styles/forum/CommentCard.css"
import user_picture from "../../../icons/userphoto_default.png"


const CommentCard = (props) => {
    return (
        <div className={"comment-card"}>
            <div className={"comment-data"}>
                <img src={props.comment_data.author_photo? props.comment_data.author_photo : user_picture}
                     alt={props.comment_data.author_name}/>
                <div className={"cd-info"}>
                    <div className={"cdi-header"}>
                        <p className={"cd-user-name"}>{props.comment_data.author_name}</p>
                        <p className={"cd-date"}>{props.comment_data.date_created}</p>
                    </div>
                    <p className={"cd-content"}>{props.comment_data.comment_content}</p>
                </div>
            </div>
            <div className={"comment-interaction-box"}>
                <img src={reaction} alt={"Reaction"}/>
                <img src={comment_outline} alt={"Comment"}/>
            </div>
        </div>
    )
}

export default CommentCard;