import {useEffect, useState} from "react";
import CourseSectionContext from "./CourseSectionContext";
import {methods, urls} from "../../components/SPApi";


const CourseSectionState = (props) => {
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [courseSection, setCourseSection] = useState({
        course_code: "",
        course_sections: [],
    })
    const [refreshCourseSection, setRefreshCourseSection] = useState()

    useEffect(() => {
        if (selectedCourse) {
            fetch(urls.get_section_by_course(selectedCourse), methods.get())
                .then(r => r.json())
                .then(data => {
                    if (data) {
                        setCourseSection(data)
                    } else {
                        setCourseSection([])
                    }
                }).catch(errors => console.log(errors))
        }
    }, [refreshCourseSection, selectedCourse])

    return (
        <CourseSectionContext.Provider value={{
            courseSection: [courseSection],
            selectedCourse: [selectedCourse, setSelectedCourse],
            refreshCourseSection: [refreshCourseSection, setRefreshCourseSection],
        }}>
            {props.children}
        </CourseSectionContext.Provider>
    )

}

export default CourseSectionState;