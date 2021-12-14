import React from "react";
import comment_outline from "../../../icons/comment-outline.svg"
import reaction from "../../../icons/reaction.svg"
import "../../../styles/forum/CommentCard.css"


const CommentCard = (props) => {
    return (
        <div className={"comment-card"}>
            <div className={"comment-data"}>
                <img src={props.data.cd_userimage} alt={props.cd_username}/>
                <div className={"cd-info"}>
                    <div className={"cdi-header"}>
                        <p className={"cd-user-name"}>{props.data.cd_username}</p>
                        <p className={"cd-date"}>{props.data.cd_date}</p>
                    </div>
                    <p className={"cd-content"}>{props.data.cd_content}</p>
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