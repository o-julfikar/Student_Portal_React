import "../../styles/admin/AdminPanel.css"
import React from "react";
import {Route, Routes} from "react-router";
import AddCourseSection from "./AddCourseSection";
import {NavLink} from "react-router-dom";


export const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <div className="left-sidebar">
                <NavLink to={"add-course"}>
                    Add course
                </NavLink>
            </div>
            <div className="admin-container">

                <Routes>
                    <Route path={"add-course"} element={<AddCourseSection/>}/>
                </Routes>

            </div>

        </div>
    )
}