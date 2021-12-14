import "../styles/AccountPopup.css"
import React from "react";
import icons from "../icons/Icons"
import {Link} from "react-router-dom";
import {Logout} from "./accounts/Accounts";
import {useNavigate} from "react-router";

const AccountPopup = (props) => {
    const navigation = useNavigate();
    return (
        <div className="account-popup" onBlur={() => props.close()}>
            <img src={icons.user_photo} alt="User"/>
            <Link to = {"profile"}><p className="ap-user-name" autoFocus={true}>Mohammad Zulfikar Ali Mahbub</p></Link>
            <Link to = {"edit-profile"}><p className={"ap-edit-profile"}>Edit your profile</p></Link>
            <input autoFocus/>
            <div className="ap-footer">
                <Link to = {"admin"}><p className={"ap-admin-panel"}>Admin Panel</p></Link>
                <p className="ap-sign-out" onClick={() => Logout(navigation)}>Sign Out</p>
            </div>
        </div>
    )
}

export default AccountPopup;