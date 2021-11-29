import React from "react";
import StudySwapCard from "./StudySwapCard";
import icons from "../../../icons/Icons";
import SwapRow from "./SwapRow";


const StudySwap = (props) => {
    return (
        <div className="stud-swap">
            <div className="swap-cards">
                <StudySwapCard provider_photo = {icons.user_photo} provider_name = "Mohammad Zulfikar Ali Mahbub"
                                 receiver_photo = {icons.user_photo} receiver_name = "G M Sohanur Rahman"
                                 swap_course = "CSE425" swap_day = "MON" swap_time = "8:00 AM"
                />
                <StudySwapCard provider_photo = {icons.user_photo} provider_name = "G M Sohanur Rahman"
                                 receiver_photo = {icons.user_photo} receiver_name = "Prioti Saha Tony"
                                 swap_course = "CSE421" swap_day = "WED" swap_time = "9:30 AM"
                />
                <StudySwapCard provider_photo = {icons.user_photo} provider_name = "Prioti Saha Tony"
                                 receiver_photo = {icons.user_photo} receiver_name = "Md. Imtiyaz Bhuiyan"
                                 swap_course = "CSE341" swap_day = "THU" swap_time = "2:00 PM"
                />
                <StudySwapCard provider_photo = {icons.user_photo} provider_name = "Md. Imtiyaz Bhuiyan"
                                 receiver_photo = {icons.user_photo} receiver_name = "Mohammad Zulfikar Ali Mahbub"
                                 swap_course = "CSE110" swap_day = "SAT" swap_time = "11:00 AM"
                />
            </div>
            <div className={"swap-right-sidebar"}>
                <div className="slot-container">
                    <div className="table-slot-container">
                        <div className="table-slot-scroll">
                            <table className={"table-slot"}>
                            <thead>
                                <tr>
                                    <td colSpan={"2"}>Available Slots</td>
                                </tr>
                            </thead>
                            <SwapRow swap_rows = {["SAT | 11:00 AM", "MON | 8:00 AM", "WED | 12:30 PM", "SAT | 11:00 AM", "MON | 8:00 AM", "WED | 12:30 PM", "SAT | 11:00 AM", "MON | 8:00 AM", "WED | 12:30 PM", "SAT | 11:00 AM", "MON | 8:00 AM", "WED | 12:30 PM"]} swap_row_type = "sec-offer"
                            />
                            </table>
                        </div>
                    </div>
                    <div className="slot-cbo-container">
                        <select className={"cbo-slot-day"}>
                            <option disabled selected>Day</option>
                            <option>SAT</option>
                            <option>SUN</option>
                            <option>MON</option>
                            <option>TUE</option>
                            <option>WED</option>
                            <option>THU</option>
                            <option>FRI</option>
                        </select>
                        <select className={"cbo-slot-time"}>
                            <option disabled selected>Time</option>
                            <option>8:00 AM</option>
                            <option>9:30 AM</option>
                            <option>11:00 AM</option>
                            <option>12:30 PM</option>
                            <option>2:00 PM</option>
                            <option>3:30 PM</option>
                            <option>5:00 PM</option>
                            <option>6:30 PM</option>
                            <option>8:00 PM</option>
                        </select>
                    </div>
                    <button>Add</button>
                </div>
                <div className="offer-container">
                    <div className="table-op-container">
                        <div className="table-op-scroll">
                            <table className={"table-op"}>
                            <thead>
                                <tr>
                                    <td colSpan={"2"}>Teach</td>
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
                                    <td colSpan={"2"}>Learn</td>
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

export default StudySwap;