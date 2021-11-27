import React from "react";
import user_photo from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg"


const RightNav = () => {
    return (
        <div className={"right-nav"}>
            <ul>
                <li className={"header-more-button"}><img src={more_button} alt={"More Button"}/></li>
                <li>
                <div className={"user-header"}>
                    <img src={user_photo} alt={"User profile"}/>
                    <p>Mohammad Zulfikar Ali Mahbub</p>
                </div>
                </li>
            </ul>
        </div>
    )
}

export default RightNav