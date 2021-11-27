import React from "react";
import "../../styles/navbar/Nav.css"
import LeftNav from "./components/LeftNav";
import MidNav from "./components/MidNav";
import RightNav from "./components/RightNav";

const Nav = () => {
    return (
        <div className="navbar">
            <LeftNav/>
            <MidNav/>
            <RightNav/>
        </div>
    )
}

export default Nav;