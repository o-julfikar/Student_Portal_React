import "../../styles/notifications/Notifications.css";
import React, {useContext} from "react";
import NotificationCard from "./components/NotificationCard";
import NotificationContext from "../../contexts/notifications/NotificationContext";


const reactionCodes = {
    LIKE: 1010, DISLIKE: 1011, LOVE: 1012, HAHA: 1013, SAD: 1014, ANGRY: 1015, IMP: 1016
}

const Notifications = (props) => {
    const [notification] = useContext(NotificationContext).notificationOnly

    props.setSection(3);

    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className={"notifications"}>
                <div className="noti-groups">
                    {
                        (() => {
                            if (notification) {
                                return (
                                    notification.map((item, i) => (
                                        (() => {
                                            if (item.noti_group_key !== -1) {
                                                return (
                                                    <div className={"noti-group"}>
                                                        <h3 key={i}>{item.noti_group_key}</h3>
                                                        <div className="noti-cards">
                                                            {
                                                                (() => {
                                                                    if (item.noti_group_data) {
                                                                        return (
                                                                            item.noti_group_data.map((noti_card, j) => (
                                                                                <NotificationCard
                                                                                    data={{
                                                                                        notification_id: noti_card.notification_id,
                                                                                        sender_bracu_id: noti_card.sender_bracu_id,
                                                                                        sender_photo: noti_card.sender_photo,
                                                                                        notification_content: noti_card.notification_content,
                                                                                        date_created: noti_card.date_created,
                                                                                        date_read: noti_card.date_read,
                                                                                        noti_type: noti_card.noti_type,
                                                                                        reaction_type: noti_card.reaction_type,
                                                                                        post: noti_card.post,
                                                                                        comment: noti_card.comment,
                                                                                        course: noti_card.course,
                                                                                        instructor: noti_card.instructor,
                                                                                        sec_swap_request: noti_card.sec_swap_request,
                                                                                        study_swap_request: noti_card.study_swap_request,
                                                                                    }}
                                                                                />
                                                                            ))
                                                                        )
                                                                    }
                                                                })()
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })()
                                    ))
                                )
                            }
                        })()
                    }
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
                        <select id={"cbo-reaction-type"}>LIKE: 1010, DISLIKE: 1011, LOVE: 1012, HAHA: 1013, SAD: 1014,
                            ANGRY: 1015, IMP: 1016
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