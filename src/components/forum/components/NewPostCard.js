import React, {useContext, useState} from "react";
import "../../../styles/forum/NewPostCard.css"
import {methods, urls} from "../../SPApi";
import PostIdsContext from "../../../contexts/forum/PostIdsContext";


const NewPostCard = (props) => {
    const [postValue, setPostValue] = useState("")
    const [courseSemester, setCourseSemester] = useState("")
    const [refreshPostIds, setRefreshPostIds] = useContext(PostIdsContext).refreshPostIds;

    function create_post(e) {
        let post_course_semester = courseSemester;
        let post_data = {
            post_content: postValue,
        }
        if (post_course_semester.includes(" | ")) {
            post_course_semester = post_course_semester.split(" | ");
            if (post_course_semester.length === 2) {
                let [course, semester] = post_course_semester
                post_data = {...post_data, post_course: course, post_semester: semester}
            }
        }

        fetch(urls.create_post, methods.post(post_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    // setRefreshPost(!refreshPost);
                    setRefreshPostIds(!refreshPostIds);
                    setPostValue("");
                    setCourseSemester("");
                    e.target.blur();
                }
            }).catch(error => console.log(error))

        // props.functions.create_post(post_data, setPostValue, setCourseSemester, e.target);
    }

    function create_post_final(post_data, setPostValue, setCourseSemester, button) {
        // fetch(urls.create_post, methods.post(post_data))
        //     .then(r => r.json())
        //     .then(data => {
        //         if (data) {
        //             // setRefreshPost(!refreshPost);
        //             setRefreshPostIds(!refreshPostIds);
        //             setPostValue("");
        //             setCourseSemester("");
        //             button.blur();
        //         }
        //     }).catch(error => console.log(error))
    }

    return (
        <div className={"new-post-card"}>
            <textarea id={"txt-new-post"} placeholder={"Write something..."} value={postValue}
                      onChange={(e) => setPostValue(e.target.value)}/>
            <div className="post-options">
                <select id={"cbo-course"}
                        defaultValue={"Select a course"}
                        onChange={(e) => setCourseSemester(e.target.value)}>
                    <option>Select a course</option>
                    {
                        props.states.enrolledCourses.slice().reverse().map((enroll, i) => (
                            <option key={i}>
                                {enroll.course} | {enroll.semester}
                            </option>
                        ))
                    }
                </select>
                <button type={"submit"} id={"btn-submit-new-post"} onClick={create_post}>Post</button>
            </div>
        </div>
    );
}

export default NewPostCard;