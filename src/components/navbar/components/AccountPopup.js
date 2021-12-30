import "../../../styles/navbar/AccountPopup.css"
import React from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";

const AccountPopup = (props) => {

    return (
        // <div className="account-popup">
        <div className="account-popup" onBlur={() => props.close()}>
            <img src={props.states.userInfo.photo? props.states.userInfo.photo : icons.user_photo} alt="User"/>
            <Link to = {`profile/${props.states.userInfo.bracu_id}`}>
                <p className="ap-user-name" autoFocus={true}>
                    {props.states.userInfo.name}
                </p>
            </Link>
            <Link to = {"profile/edit"}><p className={"ap-edit-profile"}>Edit your profile</p></Link>
            <input autoFocus/>
            <div className="ap-footer">
                <Link to = {`/profile/${props.states.userInfo.bracu_id}/enroll-course`}>
                    <p className={"ap-admin-panel"}>
                        Enroll Course
                    </p>
                </Link>
                {
                    (() => {
                        if (props.states.userInfo['role'] === "Admin") {
                            return (
                                <Link to = {"admin"}><p className={"ap-admin-panel"}>Admin Panel</p></Link>
                            )
                        }
                    })()
                }
                <p className="ap-sign-out" onClick={() => props.logout()}>Sign Out</p>
            </div>
        </div>
    )
}

export default AccountPopup;