import React, {useContext} from "react";
import NewPostCard from "./components/NewPostCard";
import "../../styles/forum/Forum.css"
import PostCard from "./components/PostCard";
import {PageSectionContext} from "../contexts/PageSectionContext";


const Forum = (props) => {
    const [pageSection, setPageSection] = useContext(PageSectionContext)
    setPageSection(pageSection[0] !== 0? 0 : pageSection)
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"forum"}>
            <NewPostCard {...props} />
                {props.states.posts.map((post) => (
                    <PostCard key={post.post_id} post_id={post.post_id} bracu_id={post.author_bracu_id}
                              user_name={post.author_name} post_course={post.post_course} post_semester={post.post_semester}
                              post_date={post.date_created} post_content={post.post_content}
                              post_reaction_count={post.post_reactions.count}
                              post_comment_count={post.post_comments.count} cd_data={post.post_comments.data}
                              functions={{
                                  ...props.functions,
                              }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Forum;
