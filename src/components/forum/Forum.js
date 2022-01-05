import React, {useContext} from "react";
import NewPostCard from "./components/NewPostCard";
import "../../styles/forum/Forum.css"
import PostCard from "./components/PostCard";
import {Route, Routes} from "react-router";
import PostCardDynamicState from "../../contexts/forum/PostCardDynamicState";
import PostCardDynamic from "./components/PostCardDynamic";
import icons from "../../icons/Icons"
import PostIdsContext from "../../contexts/forum/PostIdsContext";


const Forum = (props) => {
    const [postIds] = useContext(PostIdsContext).postIdsOnly;

    props.customNav(0)
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"forum"}>
                <Routes>
                    <Route path={"post/:post_id"} element={
                        <PostCardDynamicState>
                            <PostCardDynamic/>
                        </PostCardDynamicState>
                    }>

                    </Route>
                    <Route path={"*"} element={
                        <div className={"post-cards"}>
                            <NewPostCard {...props} />
                            {
                                postIds.map((postId, i) => (
                                    <PostCard key={i} post_id={postId}/>
                                ))
                            }
                        </div>
                    }>
                    </Route>
                </Routes>
                <div className="left-sidebar">
                    <div className="boi-poka">
                        <p>Enjoy reading books?</p>
                        <a href={"https://boipoka-web-reactjs.herokuapp.com/"} target={"_blank"} rel="noreferrer">
                            <img className={"boi-poka-logo"} src={icons.boi_poka} alt={"Boi Poka"}/>
                        </a>
                    </div>
                    <div className="idea-connect">
                        <p>Have an Idea?</p>
                        <a href={"https://ideaconnect-web-391.btocode.repl.co/"} target={"_blank"} rel="noreferrer">
                            <h3>IdeaConnect</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum;
