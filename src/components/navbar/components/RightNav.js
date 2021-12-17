import React, {useState} from "react";
import user_photo from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg"
import {NavLink} from "react-router-dom";
import AccountPopup from "./AccountPopup";


const RightNav = (props) => {
    const [open, setOpen] = useState(false);
    function close() {
        setTimeout(() => setOpen(false), 200);
    }

    return (
        <div className={"right-nav"}>
            <ul>
                <li className={"header-more-button" + (open? " open" : "")}>
                    <img src={more_button} alt={"More Button"} onClick={() => setOpen(!open)}/>
                    { open && <AccountPopup close = {close} {...props} states = {{
                        ...props.states,
                    }}/> }
                </li>
                <li>
                    <NavLink to={"profile"}>
                        <nav className={"user-header" + (open? " open" : "")}>
                            <img src={user_photo} alt={"User profile"}/>
                            <p>{props.states.profileInfo.name}</p>
                        </nav>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default RightNav