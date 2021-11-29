import React from "react";
import user_photo from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg"
import {NavLink} from "react-router-dom";


const RightNav = () => {
    return (
        <div className={"right-nav"}>
            <ul>
                <li className={"header-more-button"}><img src={more_button} alt={"More Button"}/></li>
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