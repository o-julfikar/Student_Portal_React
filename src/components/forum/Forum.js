import React from "react";
import NewPostCard from "./components/NewPostCard";
import "../../styles/forum/Forum.css"
import PostCard from "./components/PostCard";
import {Route, Routes} from "react-router-dom";
import {useParams} from "react-router";
import PostCardDynamicState from "../../contexts/forum/PostCardDynamicState";
import PostCardDynamic from "./components/PostCardDynamic";
import icons from "../../icons/Icons"


const Forum = (props) => {
    const {post_id} = useParams();
    props.customNav(0)
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"forum"}>
                <div className="left-sidebar">
                    <div className="boi-poka">
                        <p>Enjoy reading books?</p>
                        <a href={"https://github.com/ShahriyarHussain/Boipoka-web"} target={"_blank"}>
                            <img className={"boi-poka-logo"} src={icons.boi_poka} alt={"Boi Poka"}/>
                        </a>
                    </div>
                    <div className="idea-connect">
                        <p>Have an Idea?</p>
                        <a href={"https://github.com/Btocode/IdeaConnect-web"} target={"_blank"}>
                            <h3>IdeaConnect</h3>
                        </a>
                    </div>
                </div>
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
                                props.states.posts.map((post) => (
                                    <PostCard key={post.post_id} post_id={post.post_id} bracu_id={post.author_bracu_id}
                                              author_photo={post.author_photo} user_name={post.author_name}
                                              post_course={post.post_course} post_semester={post.post_semester}
                                              post_date={post.date_created} post_content={post.post_content}
                                              post_reaction_count={post.post_reactions.count}
                                              post_comment_count={post.post_comments.count}
                                              cd_data={post.post_comments.data}
                                              functions={{
                                                  ...props.functions,
                                              }}
                                    />
                                ))
                            }
                        </div>
                    }>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Forum;
