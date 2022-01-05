import PostCardDynamicContext from "./PostCardDynamicContext";
import {useEffect, useMemo, useState} from "react";
import {methods, urls} from "../../components/SPApi";

const PostCardDynamicState = (props) => {
    const initialDynamicPostCard = useMemo(() => {
        return (
            {
                post_id: -1,
                author_bracu_id: -1,
                author_name: "",
                author_photo: "",
                post_course: "",
                post_content: "",
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
            }
        )
    }, [])

    const [postCardId, setPostCardId] = useState(-1);
    const [refreshPost, setRefreshPost] = useState(true);
    const [postCardDynamic, setPostCardDynamic] = useState(initialDynamicPostCard);


    useEffect(() => {
        if (postCardId >= 0) {
            fetch(urls.get_post_by_id + postCardId, methods.get())
                .then(r => r.json())
                .then(data => {
                    if (data) {
                        setPostCardDynamic(data)
                    }
                })
        } else {
            setPostCardDynamic(initialDynamicPostCard)
        }
    }, [postCardId, refreshPost, initialDynamicPostCard]);

    return (
        <PostCardDynamicContext.Provider value={{
            postCardDynamicOnly: [postCardDynamic],
            postCardId: [postCardId, setPostCardId],
            postCardIdOnly: [postCardId],
            setPostCardIdOnly: [setPostCardId],
            refreshPost: [refreshPost, setRefreshPost],
        }}>
            {props.children}
        </PostCardDynamicContext.Provider>
    )
}

export default PostCardDynamicState;