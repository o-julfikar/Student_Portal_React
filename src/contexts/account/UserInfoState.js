import React, {useEffect, useState} from "react";
import UserInfoContext from "./UserInfoContext";
import {methods, urls} from "../../components/SPApi";


const UserInfoState = (props) => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [refreshEnrolledCourses, setRefreshEnrolledCourses] = useState(true);
    const [refreshUserInfo, setRefreshUserInfo] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const [profileId, setProfileId] = useState(0);
    const [profileInfo, setProfileInfo] = useState([]);
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        fetch(urls.profile_info, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setUserInfo(data)
                } else {
                    setUserInfo([])
                    // setRefreshProfileInfo(!refreshUserInfo)
                }
            }).catch(error => console.log(error))
        return () => {

        }
    }, [refreshUserInfo])

    useEffect(() => {
        fetch(urls.profile_info + `${profileId}`, methods.get())
            .then(r => r.json())
            .then(data => {
                // console.log(data)
                if (data) {
                    setProfileInfo(data)
                } else {
                    setProfileInfo([])
                }
            }).catch(error => console.log(error))
        return () => {

        }
    }, [refreshUserInfo, profileId])

    useEffect(() => {
        fetch(urls.get_post + `${profileId}`, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setUserPosts(data)
                }
            }).catch(error => console.log(error))
    }, [profileId])

    useEffect(() => {
        fetch(urls.enrolled_courses, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setEnrolledCourses(data)
                } else {
                    setEnrolledCourses([])
                    // setRefreshEnrolledCourses(!refreshEnrolledCourses)
                }
            }).catch(error => console.log(error))
        return () => {

        }
    }, [refreshEnrolledCourses])

    return (
        <UserInfoContext.Provider value={{
            enrolledCourses: [enrolledCourses, setEnrolledCourses],
            enrolledCoursesOnly: [enrolledCourses],
            profileId: [profileId, setProfileId],
            setProfileIdOnly: [setProfileId],
            profileInfo: [profileInfo, setProfileInfo],
            profileInfoOnly: [profileInfo],
            refreshEnrolledCourses: [refreshEnrolledCourses, setRefreshEnrolledCourses],
            refreshUserInfo: [refreshUserInfo, setRefreshUserInfo],
            userInfo: [userInfo, setUserInfo],
            userInfoOnly: [userInfo],
            userPosts: [userPosts, setUserPosts],
            userPostsOnly: [userPosts],
        }}>
            {props.children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoState;