import "../../styles/profile/Profile.css"
import React from "react";
import ProfileMain from "./componenets/ProfileMain";
import {Navigate, Route, Routes} from "react-router";
import EnrollCourse from "./componenets/EnrollCourse";


const Profile = (props) => {
    return (
        <div className={"transition-helper-" + (props.states.section[0])}>
            <div className="profile">
                <div className="content-container">
                    <Routes>
                        {(() => {
                            if (props.states.userInfo.bracu_id) {
                                props.states.setProfileId(props.states.userInfo.bracu_id)
                                return (
                                    <Route path={"/"} element={
                                        <Navigate to={props.states.userInfo.bracu_id.toString()}/>
                                    }/>
                                )
                            }
                        })()}
                        <Route path={"*"} element={
                            <ProfileMain states={{
                                ...props.states,
                            }}/>}
                        />
                    </Routes>
                </div>
                <div className="left-sidebar">
                    <Routes>
                        {(() => {
                            if (props.states.userInfo.bracu_id) {
                                return (
                                    <Route path={`/${props.states.userInfo.bracu_id}/enroll-course`} element={
                                        <EnrollCourse states={{
                                            ...props.states,
                                        }}/>}
                                    />
                                )
                            }
                        })()}
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
