import "../../../styles/profile/EnrollCourse.css";
import React, {useContext} from "react";
import {CrossIco} from "../../../icons/IconsSelect";
import {methods, urls} from "../../SPApi";
import UserInfoContext from "../../../contexts/account/UserInfoContext";


const EnrollCourse = () => {
    const [refreshEnrolledCourses, setRefreshEnrolledCourses] = useContext(UserInfoContext).refreshEnrolledCourses
    const [refreshUserInfo, setRefreshUserInfo] = useContext(UserInfoContext).refreshUserInfo
    const [enrolledCourses] = useContext(UserInfoContext).enrolledCoursesOnly;
    let years = [];
    let currentYear = new Date().getFullYear();
    for (let i = currentYear - 10; i < currentYear + 10; i++) {
        years.push(i);
    }

    function addCourseOnClick() {
        let semester = document.getElementById("cbo-semester");
        let year = document.getElementById("cbo-year");
        let course = document.getElementById("txt-course");

        let enrollCourseData = {
            semester: semester.value + " " + year.value,
            course: course.value,
        }

        fetch(urls.enroll_course, methods.post(enrollCourseData))
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setRefreshEnrolledCourses(!refreshEnrolledCourses)
                    setRefreshUserInfo(!refreshUserInfo)
                }
            }).catch(error => console.log(error))
    }

    function deleteCourseOnClick(row) {
        let row_id = row.target.id.split("-").at(-1);
        let semester = document.getElementById(`ec-semester-${row_id}`).innerHTML;
        let course = document.getElementById(`ec-course-${row_id}`).innerHTML;

        let deleteCourseData = {
            semester: semester,
            course: course,
        }

        console.log(deleteCourseData)

        fetch(urls.unenroll_course, methods.post(deleteCourseData))
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setRefreshUserInfo(!refreshUserInfo)
                    setRefreshEnrolledCourses(!refreshEnrolledCourses)
                }
            }).catch(error => console.log(error))
    }

    return (
        <div className="enroll-course">
            <h2>Enrolled courses</h2>
            <div className="sidebar-table-container">
                <div className="sidebar-table-scroll">
                    <table>
                        <colgroup>
                            <col/>
                            <col/>
                            <col/>
                        </colgroup>
                        <thead>
                        <tr>
                            <td>Course</td>
                            <td colSpan={2}>Semester</td>
                        </tr>
                        </thead>
                        <tbody>
                        {enrolledCourses.map((item, i) => (
                                <tr id={`ec-row-${i}`} key={i}>
                                    <td id={`ec-course-${i}`}>{item.course}</td>
                                    <td id={`ec-semester-${i}`}>{item.semester}</td>
                                    <td id={`ec-delete-${i}`} 
                                        className={"table-row-delete-cell"}
                                        onClick={deleteCourseOnClick}>
                                        <div id={`ec-delete-div-${i}`}>
                                            <CrossIco id={`ec-delete-icon-${i}`} />
                                        </div>
                                    </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="enroll-container">
                <label>
                    <p>Semester</p>
                    <select id={"cbo-semester"}>
                        <option>Spring</option>
                        <option>Summer</option>
                        <option>Fall</option>
                    </select>
                </label>
                <label>
                    <p>Year</p>
                    <select id={"cbo-year"} defaultValue={currentYear}>
                        {years.map((year, id) => {
                            return <option key={id}>{year}</option>
                        })}
                    </select>
                </label>
                <label>
                    <p>Course</p>
                    <input id={"txt-course"} type={"text"} placeholder={"Enter course code"}/>
                </label>
                <button type={"submit"} onClick={addCourseOnClick}>Add</button>
            </div>
        </div>
    )
}

export default EnrollCourse
