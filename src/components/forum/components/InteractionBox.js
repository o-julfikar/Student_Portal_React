import React from "react";
import comment_outline from "../../../icons/comment-outline.svg"
import reaction from "../../../icons/reaction.svg"
import CommentCard from "./CommentCard";
import "../../../styles/forum/InteractionBox.css"

const InteractionBox = (props) => {
    let commentCards = []
    for (let i = 0; i < props.cd_data.length; i++) {
        commentCards.push(<CommentCard key = {i} data = {props.cd_data[i]} />)
    }
    return (
        <div className={"interaction-box"}>
            <div className={"i-buttons"}>
                <div className={"i-reaction"}>
                    <p>{props.reaction_count}</p>
                    <img src={reaction} alt={"Reaction"}/>
                </div>
                <div className={"i-comment"}>
                    <img src={comment_outline} alt={"Comment"}/>
                    <p>{props.comment_count}</p>
                </div>
            </div>
            <div className={"comment-cards"}> {commentCards} </div>
            <div className={"new_comment_box"}>
                <textarea placeholder={"Write something..."}/>
                <button type={"button"}>Submit</button>
            </div>
        </div>
    )
}

export default InteractionBox;