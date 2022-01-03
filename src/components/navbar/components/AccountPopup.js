import "../../../styles/navbar/AccountPopup.css"
import React, {useContext} from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";
import {methods, urls} from "../../SPApi";
import {SPCookies as cookies} from "../../SPCookies";
import {useNavigate} from "react-router";
import UserInfoContext from "../../../contexts/account/UserInfoContext";

const AccountPopup = (props) => {
    const [userInfo] = useContext(UserInfoContext).userInfoOnly;
    const navigate = useNavigate();
    const [refreshEnrolledCourses, setRefreshEnrolledCourses] = useContext(UserInfoContext).refreshEnrolledCourses
    const [refreshUserInfo, setRefreshUserInfo] = useContext(UserInfoContext).refreshUserInfo

    function logout() {
        fetch(urls.logout, methods.get())
            .then(r => r.json())
            .catch(error => {
                console.log(error)
            }).finally(() => {
            setRefreshUserInfo(!refreshUserInfo);
            setRefreshEnrolledCourses(!refreshEnrolledCourses);
            cookies.setCookie('spsid', null, 0);
            navigate("/")
        });
    }


    return (
        // <div className="account-popup">
        <div className="account-popup" onBlur={() => props.close()}>
            <img src={userInfo.photo? userInfo.photo : icons.user_photo} alt="User"/>
            <Link to = {`profile/${userInfo.bracu_id}`}>
                <p className="ap-user-name" autoFocus={true}>
                    {userInfo.name}
                </p>
            </Link>
            <Link to = {"profile/edit"}><p className={"ap-edit-profile"}>Edit your profile</p></Link>
            <input autoFocus/>
            <div className="ap-footer">
                <Link to = {`/profile/${userInfo.bracu_id}/enroll-course`}>
                    <p className={"ap-admin-panel"}>
                        Enroll Course
                    </p>
                </Link>
                {
                    (() => {
                        if (userInfo['role'] === "Admin") {
                            return (
                                <Link to = {"admin"}><p className={"ap-admin-panel"}>Admin Panel</p></Link>
                            )
                        }
                    })()
                }
                <p className="ap-sign-out" onClick={logout}>Sign Out</p>
            </div>
        </div>
    )
}

export default AccountPopup;