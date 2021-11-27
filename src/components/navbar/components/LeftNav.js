import React from "react";
import logo from "../../../logo.svg"
import SearchField from "./SearchField";


const LeftNav = () => {
    return (
        <div className="left-nav">
            <img src={logo} alt={"Student Portal Logo"}/>
            <SearchField/>
        </div>
    )
}

export default LeftNav;