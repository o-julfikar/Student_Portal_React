import React from "react";
import {NavLink} from "react-router-dom";
import {ForumIco, NotificationIco, ReviewIco, SwapIco} from "../../../icons/IconsSelect";


const MidNav = () => {
    return (
        <div className={"mid-nav"}>
            {/*<svg href={forum_svg}/>*/}
            <nav>
                <NavLink exact className={({isActive}) => "nav-link" + (isActive? "active" : "")} to={"/"} >
                    <ForumIco/>
                </NavLink>
                <NavLink exact to={"/review"} className={({isActive}) => "nav-link" + (isActive? "active" : "")}>
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