import "../../styles/swap/Swap.css"
import React from "react";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import SectionSwap from "./components/SectionSwap";
import StudySwap from "./components/StudySwap";


const Swap = () => {
    return (
        <div className={"swap"}>
            <div className={"swap-left-sidebar"}>
                <nav>
                    <NavLink exact to={"section"} className={({isActive}) => "swap-nav-link" + (isActive? "-active":"")}><button>Section Swap</button></NavLink>
                    <NavLink exact to={"study"} className={({isActive}) => "swap-nav-link" + (isActive? "-active":"")}><button>Study Swap</button></NavLink>
                </nav>
                <div className="swap-controls">
                    <select className={"cbo-section"}>
                        <option>CSE110 (3)</option>
                        <option>CSE111 (2)</option>
                    </select>
                    <button className="btn-find">Find</button>
                    <button className="btn-send-req">Send Request</button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Swap;