import React from "react";
import "../../../styles/forum/NewPostCard.css"


const NewPostCard = () => {
    return (
        <div className={"new-post-card"}>
            <textarea id={"txt-new-post"} placeholder={"Write something..."}/>
            <button type={"submit"} id={"btn-submit-new-post"}>Post</button>
        </div>
    );
}

export default NewPostCard;