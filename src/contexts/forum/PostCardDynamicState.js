import PostCardDynamicContext from "./PostCardDynamicContext";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";

const PostCardDynamicState = (props) => {

    const [postCardId, setPostCardId] = useState(-1);
    const [postCardDynamic, setPostCardDynamic] = useState({
        post_id: -1,
        author_bracu_id: -1,
        author_name: "",
        author_photo: "",
        post_course: "",
        post_content: "?",
        date_created: "",
        post_semester: "",
        post_reactions: {
            count: 0,
            data: {}
        },
        post_comments: {
            count: 0,
            data: []
        }
    });

    useEffect(() => {
        console.log('start', urls.get_post_by_id + postCardId)
        fetch(urls.get_post_by_id + postCardId, methods.get())
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setPostCardDynamic(data)
                }
            })
    }, [postCardId]);

    return (
        <PostCardDynamicContext.Provider value={{
            postCardDynamicOnly: [postCardDynamic],
            postCardId: [postCardId, setPostCardId],
        }}>
            {props.children}
        </PostCardDynamicContext.Provider>
    )
}

export default PostCardDynamicState;