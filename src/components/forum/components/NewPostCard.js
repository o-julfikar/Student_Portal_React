import React, {useState} from "react";
import "../../../styles/forum/NewPostCard.css"


const NewPostCard = (props) => {
    const [postValue, setPostValue] = useState("")
    const [courseSemester, setCourseSemester] = useState("")

    function create_post() {
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
        props.functions.create_post(post_data);
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
                        props.states.enrolledCourses.reverse().map((enroll, i) => (
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