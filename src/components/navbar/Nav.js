import React from "react";
import "../../styles/navbar/Nav.css"
import LeftNav from "./components/LeftNav";
import MidNav from "./components/MidNav";
import RightNav from "./components/RightNav";
import {useLocation} from "react-router";
import RequireAuth from "../accounts/RequireAuth";

const Nav = (props) => {
    const pathname = useLocation().pathname;

    if (pathname.startsWith("/login")) {
        return null;
    }

    return (
        <RequireAuth>
            <div className={"navbar" + (pathname.startsWith("/login") ? " no-nav" : "")}>
                <LeftNav/>
                <MidNav/>
                <RightNav {...props} states={{
                    ...props.states,
                }}/>
            </div>
        </RequireAuth>
    )
}

export default Nav;