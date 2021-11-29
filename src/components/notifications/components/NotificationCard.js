import "../../../styles/notifications/NotificationCard.css";
import React from "react";
import {NotiReadSwitchIco} from "../../../icons/IconsSelect";


const NotificationCard = (props) => {
    return (
        <div className={"noti-card" + (props.data.readAt == null? "" : " read")}>
            {/*<p>Hi {props.data.toString()}</p>*/}
            {/*<p>Hi {props.data}</p>*/}
            <img src={props.data.receiverPhoto} alt={"Receiver"}/>
            <div className="noti-data">
                <p className="noti-msg">{props.data.notiMessage}</p>
                <p className="noti-date">{props.data.notiDate}</p>
            </div>
            <NotiReadSwitchIco color = {props.data.readAt == null? "#0F5D88" : "none"}/>
        </div>
    )
}

export default NotificationCard;