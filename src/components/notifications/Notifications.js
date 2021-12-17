import "../../styles/notifications/Notifications.css";
import React from "react";
import NotificationCard from "./components/NotificationCard";
import icons from "../../icons/Icons"

const timeDic = {
    "sec": 1000,
    "min": 1000 * 60,
    "hr": 1000 * 60 * 60,
    "day": 1000 * 60 * 60 * 24,
    "week": 1000 * 60 * 60 * 24 * 7,
    "month": 1000 * 60 * 60 * 24 * 30,
    "year": 1000 * 60 * 60 * 24 * 365
}

const notiType = {
    POST: 10, COMMENT: 11, REPLY: 12, REVIEW: 20, SECS: 30, STUDS: 31,
    WRITES: 100, REACTS: 101,  MENTIONS: 102
}

const reactionCodes = {
    LIKE: 1010, DISLIKE: 1011, LOVE: 1012, HAHA: 1013, SAD: 1014, ANGRY: 1015, IMP: 1016
}

function checkForPlurals(value, word) {
    value = Math.floor(value)
    if (value === 1) return value + " " + word;
    return value + " " + word + "s";
}

// function timeDifference(timeOne, timeTwo, returnType) {
//     let timeDiff = timeTwo - timeOne;
//
//     return Math.floor(timeDiff)
// }

function timeToString(timeInMillis) {
    let year, month, week, day, hr, min;
    let timeString = "", sep = "";
    if (timeInMillis > timeDic["year"]) {
        year = timeInMillis / timeDic["year"];
        timeString += sep + checkForPlurals(year, "year");
        timeInMillis %= timeDic["year"];
        sep = " ";
    }
    if (timeInMillis > timeDic["month"]) {
        month = timeInMillis / timeDic["month"];
        timeString += sep + checkForPlurals(month, "month");
        timeInMillis %= timeDic["month"];
        sep = " ";
    }
    if (timeInMillis > timeDic["week"]) {
        week = timeInMillis / timeDic["week"];
        timeString += sep + checkForPlurals(week, "week");
        timeInMillis %= timeDic["week"];
        sep = " ";
    }
    if (timeInMillis > timeDic["day"]) {
        day = timeInMillis / timeDic["day"];
        timeString += sep + checkForPlurals(day, "day");
        timeInMillis %= timeDic["day"];
        sep = " ";
    }
    if (timeInMillis > timeDic["hr"]) {
        hr = timeInMillis / timeDic["hr"];
        timeString += sep + checkForPlurals(hr, "hr");
        timeInMillis %= timeDic["hr"];
        sep = " ";
    }
    if (timeInMillis > timeDic["min"]) {
        min = timeInMillis / timeDic["min"];
        timeString += sep + checkForPlurals(min, "min");
        // timeInMillis %= timeDic["min"];
        // sep = " ";
    }
    // if (timeInMillis > timeDic["sec"]) {
    //     sec = timeInMillis / timeDic["sec"];
    //     timeString += sep + checkForPlurals(sec, "sec");
    //     timeInMillis %= timeDic["sec"];
    //     sep = " ";
    // }
    // if (timeInMillis > 0) {
    //     timeString += sep + checkForPlurals(timeInMillis, "millisecond")
    // }
    return timeString;
}

function getGroupKey(timeInMillis) {
    // return timeInMillis;
    let key = "";
    if (timeInMillis > timeDic["year"]) key = "year";
    else if (timeInMillis > timeDic["month"]) key = "month";
    else if (timeInMillis > timeDic["week"]) key = "week";
    else if (timeInMillis > timeDic["day"]) key = "day";
    else if (timeInMillis > timeDic["sec"]) return "Today"
    if (key === "") return "Very Recent";
    else if (key === "day" && Math.floor(timeInMillis / timeDic[key]) === 1) return "Yesterday";
    return checkForPlurals(Math.floor(timeInMillis / timeDic[key]), key);
}

function groupNotifications(notifications) {
    // let today = new Date(Date.now()).toLocaleString();
    let today = new Date();
    let notiGrouped = {}
    for (let noti of notifications) {
        let groupKey = getGroupKey((today - noti.notiDate));
        if (!(groupKey in notiGrouped)) {
            notiGrouped[groupKey] = [];
        }
        noti.notiDate = timeToString(today - noti.notiDate) + " ago"
        notiGrouped[groupKey].push(noti)
    }
    return notiGrouped;
}

let notifications = [
        {
            id: 0, notiDate: new Date(2021, 10, 28, 11, 59),
            readAt: null, notiMessage: "Steve Jobs and other 609 people commented on your post.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2021, 10, 28, 9, 42),
            readAt: null, notiMessage: "Congratulations! Your section swap request for CSE110 section 2 is accepted by all the members.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2021, 10, 28, 7, 26),
            readAt: new Date(2021, 10, 28, 11, 26),
            notiMessage: "Sourojit Roy has posted a new post for CSE110 for Fall 2021. With tags #flowcharts #assignment2 #difficult",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2021, 10, 27, 2, 52),
            readAt: null, notiMessage: "Afsan, Hasnayen and Sohan accepted your section swap request for CSE110 section 2.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2021, 9, 5, 9, 2),
            readAt: null, notiMessage: "You recieved a study planner request. Click here to view the planner in detail.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2021, 9, 8, 17, 29),
            readAt: new Date(2021, 9, 8, 17, 50),
            notiMessage: "Imtiyaz Bhiyan just liked your post.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2020, 4, 28, 3, 46),
            readAt: null, notiMessage: "Sohan and Shahriyar are waiting for your response on a study plan. Click to view the study planner.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        },{
            id: 0, notiDate: new Date(2019, 3, 25, 9, 6),
            readAt: null, notiMessage: "Abu Hasnayen Zillanee got a new review from a student for CSE421. Click to view.",
            notiType: notiType.COMMENT, reactionCode: null, notiSender: 1, notiReceiver: 2, receiverPhoto: icons.user_photo,
            postId: 1, commentId: 2, secswapId: null, studswapId: null, isApproved: false
        }

    ];
let notiGrouped = groupNotifications(notifications);

const Notifications = (props) => {
    props.setSection(3);
    let notiComponents = []
    for (let [key, value] of Object.entries(notiGrouped)) {
        notiComponents.push(<h3>{key}</h3>)
        let notiCards = []
        for (let noti of value) notiCards.push(<NotificationCard data = {noti} />);
        notiComponents.push(<div className="noti-cards">{notiCards}</div>);
    }
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"notifications"}>
                <div className="noti-groups">
                    {notiComponents}
                </div>
                <div className={"noti-right-sidebar"}>

                    <label>
                        <p>From</p>
                        <input type={"text"} placeholder={"Student Name/ ID"}/>
                    </label>
                    <label>
                        <p>Notification type</p>
                        <select id={"cbo-noti-type"}>
                            <optgroup label={"Post"}>
                                <option value={"10100"}>Writes</option>
                                <option value={"10101"}>Reacts</option>
                                <option value={"10102"}>Mentions</option>
                            </optgroup>
                            <optgroup label={"Comment"}>
                                <option value={"11100"}>Writes</option>
                                <option value={"11101"}>Reacts</option>
                                <option value={"11102"}>Mentions</option>
                            </optgroup>
                            <optgroup label={"Reply"}>
                                <option value={"12100"}>Writes</option>
                                <option value={"12101"}>Reacts</option>
                                <option value={"12102"}>Mentions</option>
                            </optgroup>
                            <optgroup label={"Review"}>
                                <option value={"20100"}>Writes</option>
                            </optgroup>
                            <optgroup label={"Section Swap"}>
                                <option value={"30103"}>Accepted</option>
                                <option value={"30104"}>Request</option>
                                <option value={"30105"}>Rejected</option>
                            </optgroup>
                            <optgroup label={"Study Swap"}>
                                <option value={"31103"}>Accepted</option>
                                <option value={"31104"}>Request</option>
                                <option value={"31105"}>Rejected</option>
                            </optgroup>
                        </select>
                    </label>
                    <label>
                        <p>Reaction type</p>
                        <select id={"cbo-reaction-type"}>LIKE: 1010, DISLIKE: 1011, LOVE: 1012, HAHA: 1013, SAD: 1014, ANGRY: 1015, IMP: 1016
                            <option value={0}>None</option>
                            <option value={reactionCodes.LIKE}>Likes</option>
                            <option value={reactionCodes.DISLIKE}>Dislikes</option>
                            <option value={reactionCodes.LOVE}>Loves</option>
                            <option value={reactionCodes.HAHA}>Haha</option>
                            <option value={reactionCodes.SAD}>Sad</option>
                            <option value={reactionCodes.ANGRY}>Angry</option>
                            <option value={reactionCodes.IMP}>Evil</option>
                        </select>
                    </label>
                    <label>
                        <p>Before</p>
                        <input type={"date"}/>
                    </label>
                    <label>
                        <p>After</p>
                        <input type={"date"}/>
                    </label>
                    <label>
                        <p>During</p>
                        <input type={"date"}/>
                    </label>
                    <button type={"submit"} value={"submit"}>Filter Notifications</button>
                </div>
            </div>
        </div>
    )
}

export default Notifications;