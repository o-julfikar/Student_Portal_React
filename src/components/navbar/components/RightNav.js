import React, {useContext, useState} from "react";
import user_photo from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg"
import {NavLink} from "react-router-dom";
import AccountPopup from "./AccountPopup";
import UserInfoContext from "../../../contexts/account/UserInfoContext";


const RightNav = () => {
    const [userInfo] = useContext(UserInfoContext).userInfoOnly;
    const [open, setOpen] = useState(false);
    function close() {
        setTimeout(() => setOpen(false), 200);
    }

    return (
        <div className={"right-nav"}>
            <ul>
                <li className={"header-more-button" + (open? " open" : "")}>
                    <img src={more_button} alt={"More Button"} onClick={() => setOpen(!open)}/>
                    {
                        open && <AccountPopup close = {close} />
                    }
                </li>
                <li>
                    <NavLink to={`profile/${userInfo.bracu_id}`}>
                        <nav className={"user-header" + (open? " open" : "")}>
                            <img src={userInfo.photo? userInfo.photo : user_photo} alt={"User profile"}/>
                            <p>{userInfo.name}</p>
                        </nav>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default RightNav