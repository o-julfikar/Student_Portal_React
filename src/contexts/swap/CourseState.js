import React, {useEffect, useState} from "react";
import CourseContext from "./CourseContext";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";


const CourseState = (props) => {
    const location = useLocation();
    const [course, setCourse] = useState([]);
    const [refreshCourse, setRefreshCourse] = useState(true);

    useEffect(() => {
        fetch(urls.get_course, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setCourse(data)
                } else {
                    setCourse([])
                }
            }).catch(errors => console.log(errors))
    }, [refreshCourse, location])

    return (
        <CourseContext.Provider value={{
            course: [course],
            refreshCourse: [refreshCourse, setRefreshCourse],
        }}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseState