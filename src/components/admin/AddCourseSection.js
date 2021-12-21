import React from "react";


const AddCourseSection = () => {
    return (
        <div className="add-course-section">
            <input type="text" id="acs-txt-course" placeholder={"Course"}/>
            <input type="number" id="acs-txt-section-from" placeholder={"Section from"}/>
            <input type="number" id="acs-txt-section-to" placeholder={"Section to"}/>
            <button id="acs-btn-add">Add</button>
        </div>
    )
}

export default AddCourseSection;
