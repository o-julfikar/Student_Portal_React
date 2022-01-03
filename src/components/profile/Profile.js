import "../../styles/profile/Profile.css"
import React, {useContext} from "react";
import ProfileMain from "./componenets/ProfileMain";
import {Navigate, Route, Routes} from "react-router";
import EnrollCourse from "./componenets/EnrollCourse";
import UserInfoContext from "../../contexts/account/UserInfoContext";


const Profile = (props) => {
    const [setProfileId] = useContext(UserInfoContext).setProfileIdOnly;
    const [userInfo] = useContext(UserInfoContext).userInfoOnly;
    props.states.setSection(4);
    return (
        <div className={"transition-helper-" + (props.states.section[0])}>
            <div className="profile">
                <div className="content-container">
                    <Routes>
                        {(() => {
                            if (userInfo.bracu_id) {
                                setProfileId(userInfo.bracu_id)
                                return (
                                    <Route path={"/"} element={
                                        <Navigate to={userInfo.bracu_id.toString()}/>
                                    }/>
                                )
                            }
                        })()}
                        <Route path={"*"} element={
                            <ProfileMain

                            />}
                        />
                    </Routes>
                </div>
                <div className="left-sidebar">
                    <Routes>
                        {(() => {
                            if (userInfo.bracu_id) {
                                return (
                                    <Route path={`/${userInfo.bracu_id}/enroll-course`} element={
                                        <EnrollCourse />}
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
