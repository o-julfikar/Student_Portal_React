import "../../styles/swap/Swap.css"
import React from "react";
import SectionSwapCard from "./components/SectionSwapCard";
import icons from "../../icons/Icons"
import SwapRow from "./components/SwapRow";


const Swap = () => {
    return (
        <div className={"swap"}>
            <div className={"swap-left-sidebar"}>
                <button>Section Swap</button>
                <button>Study Swap</button>
                <div className="swap-controls">
                    <select className={"cbo-section"}>
                        <option>CSE110 (3)</option>
                        <option>CSE111 (2)</option>
                    </select>
                    <button className="btn-find">Find</button>
                    <button className="btn-send-req">Send Request</button>
                </div>
            </div>

        </div>
    );
}

export default Swap;