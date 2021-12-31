import PostCardContext from "./PostCardContext";
import {useLocation} from "react-router";
import {useContext} from "react";
import PostIdsContext from "./PostIdsContext";

const PostCardState = (props) => {
    const location = useLocation();
    const [postIds] = useContext(PostIdsContext).postIdsOnly;
    // const [postCard, setPost]
    return (
        <PostCardContext.Provider value={{

        }}>
            {props.children}
        </PostCardContext.Provider>
    )
}

export default PostCardState;
