import "../../../styles/navbar/AccountPopup.css"
import React, {useEffect, useState} from "react";
import icons from "../../../icons/Icons"
import {Link} from "react-router-dom";
import {Logout} from "../../accounts/Accounts";
import {useNavigate} from "react-router";
import {methods, urls} from "../../SPApi";

const AccountPopup = (props) => {
    const navigation = useNavigate();
    const [basicInfo, setBasicInfo] = useState({})

    useEffect(() => {
        fetch(urls.basic_info, methods.get())
        .then(r => r.json())
        .then(data => {
            if (data !== false) {
                setBasicInfo(data)
            }
        }).catch(error => console.log(error))

    }, [])

    let adminPanel = []
    if (basicInfo['admin']) {
        adminPanel = [<Link to = {"admin"}><p className={"ap-admin-panel"}>Admin Panel</p></Link>]
    } else {
        adminPanel = []
    }

    return (
        <div className="account-popup" onBlur={() => props.close()}>
            <img src={icons.user_photo} alt="User"/>
            <Link to = {"profile"}><p className="ap-user-name" autoFocus={true}>{basicInfo.name}</p></Link>
            <Link to = {"edit-profile"}><p className={"ap-edit-profile"}>Edit your profile</p></Link>
            <input autoFocus/>
            <div className="ap-footer">
                {adminPanel}
                <p className="ap-sign-out" onClick={() => Logout(navigation)}>Sign Out</p>
            </div>
        </div>
    )
}

export default AccountPopup;