import NotificationContext from "./NotificationContext";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {methods, urls} from "../../components/SPApi";

const NotificationState = (props) => {
    const location = useLocation();
    const [newNotifications, setNewNotifications] = useState(0)
    const [refreshNotification, setRefreshNotification] = useState(true);
    const [notification, setNotification] = useState([{
        noti_group_key: -1,
        noti_group_data: [
            {
                notification_id: -1,
                sender_bracu_id: -1,
                sender_photo: "",
                notification_content: "",
                date_created: "",
                date_read: "",
                noti_type: -1,
                reaction_type: -1,
                post: -1,
                comment: -1,
                course: -1,
                instructor: -1,
                sec_swap_request: -1,
                study_swap_request: -1,
            }
        ]
    }]);

    useEffect(() => {
        fetch(urls.get_notification, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setNotification(data);
                } else {
                    console.log(data)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [refreshNotification, location])

    return (
        <NotificationContext.Provider value={{
            notificationOnly: [notification],
            notification: [notification, setNotification],
            refreshNotification: [refreshNotification, setRefreshNotification],
            newNotifications: [newNotifications, setNewNotifications],
        }}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationState;
