import React from "react";
import {NavLink} from "react-router-dom";
import {ForumIco, NotificationIco, ReviewIco, SwapIco} from "../../../icons/IconsSelect";


const MidNav = () => {
    return (
        <div className={"mid-nav"}>
            <nav>
                <NavLink to={"forum"} className={({isActive}) => "nav-link" + (isActive? "active" : "")} >
                    <ForumIco/>
                </NavLink>
                <NavLink to={"/review"} className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
                    <ReviewIco/>
                </NavLink>
                <NavLink to={"/swap"} className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
                    <SwapIco/>
                </NavLink>
                <NavLink to={"/notifications"} className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
                    <NotificationIco/>
                </NavLink>
            </nav>
        </div>
    )
}

export default MidNav