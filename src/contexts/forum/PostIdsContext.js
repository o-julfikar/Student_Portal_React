import {createContext} from "react";

const PostIdsContext = createContext({
    postIds: [],
    postIdsOnly: [],
    refreshPostIds: [],
    setRefreshPostIdsOnly: []
})

export default PostIdsContext;