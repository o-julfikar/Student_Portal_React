import React from "react";
import logo from "../../../logo.svg"
import SearchField from "./SearchField";
import {Link} from "react-router-dom";


const LeftNav = () => {
    return (
        <div className="left-nav">
            <Link to={"/profile/21341031"}>
                <img src={logo} alt={"Student Portal Logo"}/>
            </Link>
            <SearchField/>
        </div>
    )
}

export default LeftNav;