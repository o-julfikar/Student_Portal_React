import "../../styles/profile/Profile.css"
import React from "react";
import ProfileMain from "./componenets/ProfileMain";
import {Route, Routes} from "react-router";
import EnrollCourse from "./componenets/EnrollCourse";


const Profile = (props) => {

    return (
        <div className={"transition-helper-" + (props.states.section[0])}>
            <div className="profile">
                <div className="content-container">
                    <Routes>
                        <Route path={"*"} element={
                            <ProfileMain states={{
                                ...props.states,
                            }}/>}
                        />
                    </Routes>
                </div>
                <div className="left-sidebar">
                    <Routes>
                        <Route path={"enroll-course"} element={
                            <EnrollCourse states={{
                                ...props.states,
                            }}/>}
                        />
                    </Routes>
                </div>
                <div className="right-sidebar">
                    <Routes>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Profile
