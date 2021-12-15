import React, {useEffect, useState} from "react";
import user_photo from "../../../icons/userphoto_default.png"
import more_button from "../../../icons/morebutton.svg"
import {NavLink} from "react-router-dom";
import AccountPopup from "./AccountPopup";
import {methods, urls} from "../../SPApi";
import {useLocation} from "react-router";


const RightNav = () => {
    const [open, setOpen] = useState(false);
    const [basicInfo, setBasicInfo] = useState({})
    const location = useLocation();

    function close() {
        setTimeout(() => setOpen(false), 200);
    }

    useEffect(() => {
        fetch(urls.basic_info, methods.get())
        .then(r => r.json())
        .then(data => {
            if (data !== false) {
                setBasicInfo(data)
            }
        }).catch(error => console.log(error))

    }, [location])


    return (
        <div className={"right-nav"}>
            <ul>
                <li className={"header-more-button" + (open? " open" : "")}>
                    <img src={more_button} alt={"More Button"} onClick={() => setOpen(!open)}/>
                    { open && <AccountPopup close = {close}/> }
                </li>
                <li>
                    <NavLink to={"profile"}>
                        <nav className={"user-header" + (open? " open" : "")}>
                            <img src={user_photo} alt={"User profile"}/>
                            <p>{basicInfo.name}</p>
                        </nav>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default RightNav