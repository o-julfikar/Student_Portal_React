import React from "react";
import NewPostCard from "./components/NewPostCard";
import "../../styles/forum/Forum.css"
import PostCard from "./components/PostCard";

const Forum = (props) => {
    props.setSection(0);
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"forum"}>
            <NewPostCard {...props} />
                {props.states.posts.map((post) => (
                    <PostCard key={post.post_id} bracu_id={post.author_bracu_id} user_name={post.author_name}
                              course={post.course} semester={post.semester} post_date={post.date_created}
                              content={post.content} reaction_count={post.reactions.count}
                              comment_count={post.comments.count} cd_data={post.comments.data}
                    />
                ))}
            </div>
        </div>
    )
}

export default Forum;