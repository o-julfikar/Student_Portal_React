import React from "react";
import "../../styles/navbar/Nav.css"
import LeftNav from "./components/LeftNav";
import MidNav from "./components/MidNav";
import RightNav from "./components/RightNav";
import {useLocation} from "react-router";

const Nav = (props) => {
    const loc = useLocation().pathname;
    return (
        <div className= { "navbar" + (loc.startsWith("/login")? " no-nav": "")}>
            <LeftNav/>
            <MidNav/>
            <RightNav {...props} states = {{
                ...props.states,
            }}/>
        </div>
    )
}

export default Nav;