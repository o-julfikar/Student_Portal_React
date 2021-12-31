import {createContext} from "react";

const PostCardDynamicContext = createContext({
    postCardDynamicOnly: [],
    postCardId: [],
    refreshPost: [],
});

export default PostCardDynamicContext;