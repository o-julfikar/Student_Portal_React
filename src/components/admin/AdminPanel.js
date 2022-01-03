import "../../styles/admin/AdminPanel.css"
import React, {useContext} from "react";
import {Route, Routes} from "react-router";
import AddCourseSection from "./AddCourseSection";
import {NavLink} from "react-router-dom";
import UserInfoContext from "../../contexts/account/UserInfoContext";


export const AdminPanel = () => {
    const [userInfo] = useContext(UserInfoContext).userInfoOnly;

    if (userInfo.role !== "Admin") {
        return (
            <h2 style={{textAlign: "center"}}>You are not authorized!</h2>
        )
    }

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