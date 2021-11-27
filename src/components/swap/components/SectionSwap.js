import React from "react";
import SectionSwapCard from "./SectionSwapCard";
import icons from "../../../icons/Icons";
import SwapRow from "./SwapRow";


const SectionSwap = (props) => {
    return (
        <div className="sec-swap">
            <div className="swap-cards">
                <SectionSwapCard provider_photo = {icons.user_photo} provider_name = "Mohammad Zulfikar Ali Mahbub"
                                 receiver_photo = {icons.user_photo} receiver_name = "G M Sohanur Rahman"
                                 swap_course = "CSE425" swap_section = "1"
                />
                <SectionSwapCard provider_photo = {icons.user_photo} provider_name = "G M Sohanur Rahman"
                                 receiver_photo = {icons.user_photo} receiver_name = "Prioti Saha Tony"
                                 swap_course = "CSE421" swap_section = "7"
                />
                <SectionSwapCard provider_photo = {icons.user_photo} provider_name = "Prioti Saha Tony"
                                 receiver_photo = {icons.user_photo} receiver_name = "Md. Imtiyaz Bhuiyan"
                                 swap_course = "CSE341" swap_section = "9"
                />
                <SectionSwapCard provider_photo = {icons.user_photo} provider_name = "Md. Imtiyaz Bhuiyan"
                                 receiver_photo = {icons.user_photo} receiver_name = "Mohammad Zulfikar Ali Mahbub"
                                 swap_course = "CSE110" swap_section = "3"
                />
            </div>
            <div className={"swap-right-sidebar"}>
                <div className="offer-container">
                    <div className="table-op-container">
                        <div className="table-op-scroll">
                            <table className={"table-op"}>
                            <thead>
                                <tr>
                                    <td colSpan={"2"}>Offer</td>
                                </tr>
                            </thead>
                            <SwapRow swap_rows = {["CSE110 (2)", "CSE391 (3)", "ENG102 (2)", "PHY112 (1)", "PSY103 (1)", "CSE110 (2)", "CSE391 (3)", "ENG102 (2)", "PHY112 (1)", "PSY103 (1)"]} swap_row_type = "sec-offer"
                            />
                            </table>
                        </div>
                    </div>
                    <select className={"cbo-op-course"}>
                        <option disabled selected>Course</option>
                        <option>CSE110</option>
                        <option>CSE111</option>
                        <option>CSE220</option>
                        <option>CSE221</option>
                    </select>
                    <select className={"cbo-op-section"}>
                        <option disabled selected>Section</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button>Add</button>
                </div>
                <div className="prefer-container">
                    <div className="table-op-container">
                        <table className={"table-op"}>
                            <thead>
                                <tr>
                                    <td colSpan={"2"}>Prefer</td>
                                </tr>
                            </thead>
                            <SwapRow swap_rows = {["CSE110 (3)", "CSE391 (1)", "ENG102 (12)"]} swap_row_type = "sec-prefer"
                            />
                        </table>
                    </div>
                    <select className={"cbo-op-course"}>
                        <option disabled selected>Course</option>
                        <option>CSE110</option>
                        <option>CSE111</option>
                        <option>CSE220</option>
                        <option>CSE221</option>
                    </select>
                    <select className={"cbo-op-section"}>
                        <option disabled selected>Section</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}