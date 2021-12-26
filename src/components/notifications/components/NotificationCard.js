import "../../../styles/notifications/NotificationCard.css";
import React, {useContext} from "react";
import {NotiReadSwitchIco} from "../../../icons/IconsSelect";
import icons from "../../../icons/Icons";
import {Link} from "react-router-dom";
import StudySwapCardsContext from "../../../contexts/swap/StudySwapCardsContext";
import SectionSwapCardsContext from "../../../contexts/swap/SectionSwapCardsContext";

const NotificationCard = ({data}) => {
    const [setSelectedStudySwapRequest] = useContext(StudySwapCardsContext).setSelectedStudySwapRequestOnly;
    const [setSelectedSecSwapRequest] = useContext(SectionSwapCardsContext).setSelectedSecSwapRequestOnly;

    const notiModel = {
        POST: "post",
        COMMENT: "comment",
        REPLY: "reply",
        REVIEW: "review",
        SECTION_SWAP: "section_swap",
        STUDY_SWAP: "study_swap",
    }

    const notiAction = {
        WRITE: "write",
        REACT: "react",
        MENTION: "mention",
        EDIT: "edit",
        DELETE: "delete",
        REQUEST: "request",
        PENDING: "pending",
        ACCEPT: "accept",
        REJECT: "reject",
        COMPLETE: "complete",
        CANCEL: "cancel",
    }

    function notiCardOnClick(e) {
        let [model] = data.noti_type.split(" ", 1);
        if (model === notiModel.SECTION_SWAP) {
            setSelectedSecSwapRequest(data.sec_swap_request);
        } else if (model === notiModel.STUDY_SWAP) {
            console.log(data.study_swap_request)
            setSelectedStudySwapRequest(data.study_swap_request);
        }
    }

    return (
        <Link to={
            (() => {
                let [model] = data.noti_type.split(" ", 1);
                if (model === notiModel.SECTION_SWAP) {
                    return "/swap/section";
                } else if (model === notiModel.STUDY_SWAP) {
                    return "/swap/study";
                } else if (model === notiModel.POST) {
                    return "/forum/post/" + data.post;
                } else {
                    return "";
                }
            })()
        }>
            <div className={"noti-card" + (data.date_read == null ? "" : " read")} onClick={notiCardOnClick}>
                <img src={data.sender_photo ? data.sender_photo : icons.user_photo} alt={"Sender"}/>
                <div className="noti-data">
                    <p className="noti-msg">{data.notification_content}</p>
                    <p className="noti-date">{data.date_created}</p>
                </div>
                <NotiReadSwitchIco color={data.date_read == null ? "#0F5D88" : "none"}/>
            </div>
        </Link>
    )
}

export default NotificationCard;