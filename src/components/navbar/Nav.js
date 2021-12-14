import React from "react";
import "../../styles/navbar/Nav.css"
import LeftNav from "./components/LeftNav";
import MidNav from "./components/MidNav";
import RightNav from "./components/RightNav";
import {useLocation} from "react-router";

const Nav = () => {
    const loc = useLocation().pathname;
    return (
        <div className= { "navbar" + (loc.startsWith("/login")? " no-nav": "")}>
            <LeftNav/>
            <MidNav/>
            <RightNav/>
        </div>
    )
}

export default Nav;