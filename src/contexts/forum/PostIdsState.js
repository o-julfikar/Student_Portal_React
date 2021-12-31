import PostIdsContext from "./PostIdsContext";
import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";

const PostIdsState = (props) => {
    const location = useLocation();
    const [postIds, setPostIds] = useState([]);
    const [refreshPostIds, setRefreshPostIds] = useState(true);

    useEffect(() => {
        fetch(urls.get_post_ids, methods.get())
            .then(r => r.json())
            .then(data => {
                if (!(data <= 0)) {
                    setPostIds(data)
                } else {
                    setPostIds([])
                }
            }).catch(errors => {
            // console.log(errors)
            alert("An error occurred")
        })
    }, [refreshPostIds, location])

    return (
        <PostIdsContext.Provider value={{
            postIds: [postIds, setPostIds],
            postIdsOnly: [postIds],
            refreshPostIds: [refreshPostIds, setRefreshPostIds],
            setRefreshPostIdsOnly: [refreshPostIds, setRefreshPostIds],
        }}>
            {props.children}
        </PostIdsContext.Provider>
    )
}

export default PostIdsState;