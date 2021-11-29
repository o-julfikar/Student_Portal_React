import React, {useState} from "react";
import user_photo from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg"
import {NavLink} from "react-router-dom";
import AccountPopup from "../../AccountPopup";


const RightNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={"right-nav"}>
            <ul>
                <li className={"header-more-button"}>
                    <img src={more_button} alt={"More Button"} onClick={() => setOpen(!open)}/>
                    { open && <AccountPopup/> }
                </li>
                <li>
                    <NavLink to={"profile"}>
                        <nav className={"user-header"}>
                            <img src={user_photo} alt={"User profile"}/>
                            <p>Mohammad Zulfikar Ali Mahbub</p>
                        </nav>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default RightNav