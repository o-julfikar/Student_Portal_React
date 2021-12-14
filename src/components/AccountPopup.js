import "../styles/AccountPopup.css"
import React from "react";
import icons from "../icons/Icons"
import {Link} from "react-router-dom";

const AccountPopup = (props) => {
    return (
        <div className="account-popup" onBlur={() => props.close()}>
            <img src={icons.user_photo} alt="User"/>
            <Link to = {"profile"}><p className="ap-user-name" autoFocus={true}>Mohammad Zulfikar Ali Mahbub</p></Link>
            <Link to = {"edit-profile"}><p className={"ap-edit-profile"}>Edit your profile</p></Link>
            <input autoFocus/>
            <div className="ap-footer">
                <Link to = {"admin"}><p className={"ap-admin-panel"}>Admin Panel</p></Link>
                <Link to = {"login"}><p className="ap-sign-out">Sign Out</p></Link>
            </div>
        </div>
    )
}

export default AccountPopup;