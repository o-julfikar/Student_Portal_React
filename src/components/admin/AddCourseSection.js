import "../../styles/admin/AddCourseSection.css"
import React, {useContext, useState} from "react";
import CourseContext from "../../contexts/swap/CourseContext";
import {CrossIco} from "../../icons/IconsSelect";
import {methods, urls} from "../SPApi";
import CourseSectionContext from "../../contexts/swap/CourseSectionContext";


const AddCourseSection = () => {
    const [course] = useContext(CourseContext).course;
    const [refreshCourse, setRefreshCourse] = useContext(CourseContext).refreshCourse;
    const [courseSection] = useContext(CourseSectionContext).courseSection;
    const [selectedCourse, setSelectedCourse] = useContext(CourseSectionContext).selectedCourse;
    const [refreshCourseSection, setRefreshCourseSection] = useContext(CourseSectionContext).refreshCourseSection;
    const [ctrlPressed, setCtrlPressed] = useState(false);

    function getSectionData() {
        let txtCourse = document.getElementById("acs-txt-course");
        let txtSectionFrom = document.getElementById("acs-txt-section-from");
        let txtSectionTo = document.getElementById("acs-txt-section-to");
        return [
            [txtCourse, txtSectionFrom, txtSectionTo],
            {
                course_code: txtCourse.value,
                section_from: txtSectionFrom.value,
                section_to: txtSectionTo.value,
            },
        ]
    }

    function clearFields(...fields) {
        for (let field of fields) field.value = ""
    }

    function addSectionOnClick(event) {
        let [fields, sectionData] = getSectionData()
        console.log('fil', fields)
        console.log('sec', sectionData)

        fetch(urls.create_section, methods.post(sectionData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshCourse(!refreshCourse)
                    setRefreshCourseSection(!refreshCourseSection)
                    clearFields(...fields)
                }
            }).catch(errors => console.log(errors))
    }

    function deleteSectionOnClick(event) {
        let [fields, sectionData] = getSectionData()

        fetch(urls.delete_section, methods.post(sectionData))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    clearFields(...fields);
                    setRefreshCourse(!refreshCourse)
                    setRefreshCourseSection(!refreshCourseSection)
                }
            }).catch(errors => console.log(errors))
    }

    function courseRowOnClick(event) {
        if (event.target && event.target.innerHTML) {
            setSelectedCourse(event.target.innerHTML)
            if (ctrlPressed) {
                document.getElementById("acs-txt-course").value = event.target.innerHTML;
            }
        }
    }

    function deleteCourseOnClick(event) {

    }

    function deleteCourseSectionOnClick(event) {

    }

    document.onkeydown = (e) => {
        setCtrlPressed(e.ctrlKey);
    }

    document.onkeyup = (e) => {
        setCtrlPressed(false);
    }

    return (
        <div className="add-course-section">
            <div className="input-container">
                <input type="text" id="acs-txt-course" placeholder={"Course code"}/>
                <input type="number" id="acs-txt-section-from" placeholder={"Section from"}/>
                <input type="number" id="acs-txt-section-to" placeholder={"Section to"}/>
                <button id="acs-btn-add" onClick={addSectionOnClick}>Add</button>
                <button id="acs-btn-delete" className={"delete-button"} onClick={deleteSectionOnClick}>Delete</button>
            </div>
            <div className="table-container">
                <div className="course-container">
                    <div className="table-course-container">
                        <div className="table-course-scroll">
                            <table className={"table-course"}>
                                <thead>
                                    <tr>
                                        <td colSpan={"2"}>Course</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    course.map((item, i) => (
                                        <tr key={i} id={"acs-crow-" + item}
                                            className={"acs-crow" + (item === selectedCourse? " active" : "")}
                                        >
                                            <td className={"table-row-data-cell"} onClick={courseRowOnClick}>{item}</td>
                                            <td className={'table-row-delete-cell'}
                                                id={"acs-crow-delete-" + item}
                                                onClick={deleteCourseOnClick}>
                                                <CrossIco id={"acs-crow-" + item}/>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="course-section-container">
                    <div className="table-course-section-container">
                        <div className="table-course-section-scroll">
                            <table className={"table-course-section"}>
                                <thead>
                                    <tr>
                                        <td colSpan={"2"}>
                                            Section {selectedCourse && selectedCourse.length > 0? `(${selectedCourse})` : ""}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    (() => {
                                        if (courseSection && courseSection.course_sections) {
                                            return (
                                                courseSection.course_sections.map((item, i) => (
                                                    <tr key={i} id={"acs-srow-" + courseSection.course_code + "-" + item}>
                                                        <td>{item}</td>
                                                        <td className={'table-row-delete-cell'}
                                                            id={`acs-srow-delete-${courseSection.course_code}-${item}`}
                                                            onClick={deleteCourseSectionOnClick}>
                                                            <CrossIco
                                                                id={`acs-srow-${courseSection.course_code}-${item}`}/>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    })()
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddCourseSection;
