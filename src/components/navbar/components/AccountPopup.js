import "../../../styles/navbar/AccountPopup.css"
import React from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";

const AccountPopup = (props) => {

    let adminPanel = []
    if (props.states.profileInfo['admin'] === "Admin") {
        adminPanel = [<Link to = {"admin"}><p className={"ap-admin-panel"}>Admin Panel</p></Link>]
    } else {
        adminPanel = []
    }

    return (
        // <div className="account-popup">
        <div className="account-popup" onBlur={() => props.close()}>
            <img src={icons.user_photo} alt="User"/>
            <Link to = {"profile"}><p className="ap-user-name" autoFocus={true}>{props.states.profileInfo.name}</p></Link>
            <Link to = {"profile/edit"}><p className={"ap-edit-profile"}>Edit your profile</p></Link>
            <input autoFocus/>
            <div className="ap-footer">
                <Link to = {"/profile/enroll-course"}><p className={"ap-admin-panel"}>Enroll Course</p></Link>
                {adminPanel}
                <p className="ap-sign-out" onClick={() => props.logout()}>Sign Out</p>
            </div>
        </div>
    )
}

export default AccountPopup;