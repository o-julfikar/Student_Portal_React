import "../../../styles/profile/ProfileMain.css"
import icons from "../../../icons/Icons"
import React, {useContext} from "react";
import PostCard from "../../forum/components/PostCard";
import {useLocation} from "react-router";
import UserInfoContext from "../../../contexts/account/UserInfoContext";


const ProfileMain = () => {
    const [setProfileId] = useContext(UserInfoContext).setProfileIdOnly;
    const [profileInfo] = useContext(UserInfoContext).profileInfoOnly;
    const [userPosts] = useContext(UserInfoContext).userPosts
    let location = useLocation();
    let profileIndex = location.pathname.indexOf("/profile/")
    if (profileIndex >= 0) {
        let nextSlashIndex = location.pathname.indexOf("/", profileIndex + 9)
        if (nextSlashIndex < 0) nextSlashIndex = location.pathname.length
        let current_user_bracu_id = location.pathname.slice(profileIndex + 9, nextSlashIndex)
        setProfileId(parseInt(current_user_bracu_id))
        document.title = `${profileInfo['name']} | Student Portal`;
    }
    return (
        <div className="profile-main">
            <div className="prof-header">
                <div className="ph-top">
                    <div className="ph-top-header">
                        <div className="ph-top-left">
                            <div className="ph-top-left-top">
                                <div className="ph-top-left-top-left">
                                    <p className="ph-label">Posts</p>
                                    <p className="ph-value">6k</p>
                                </div>
                                <div className="ph-top-left-top-right">
                                    <p className="ph-label">Section Swaps</p>
                                    <p className="ph-value">6k</p>
                                </div>
                            </div>
                            <div className="ph-top-left-bottom">
                                <div className="ph-top-left-bottom-left">
                                    <p className="ph-label">Reviews</p>
                                    <p className="ph-value">11K</p>
                                </div>
                                <div className="ph-top-left-bottom-right">
                                    <p className="ph-label">Study Swaps</p>
                                    <p className="ph-value">11K</p>
                                </div>
                            </div>
                        </div>
                        <div className="ph-top-middle">
                            <img src={
                                profileInfo['photo'] ? profileInfo['photo'] : icons.user_photo
                            } alt={profileInfo['name']}/>
                            <p>{profileInfo['role']}</p>
                        </div>
                        <div className="ph-top-right">
                            <div className="ph-top-right-top">
                                <p className="ph-label">Department</p>
                                <p className="ph-value">{profileInfo['department']}</p>
                            </div>
                            <div className="ph-top-right-bottom">
                                <p className="ph-label">Enrolled Semester</p>
                                <p className="ph-value">{profileInfo['enrolled_semester']}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ph-name">
                        <p>{profileInfo['name']}</p>
                    </div>
                    <div className="ph-top-footer">
                        <p className="ph-label">Email</p>
                        <p className="ph-value">{profileInfo['email']}</p>
                        <p className="ph-label">Enrolled Courses</p>
                    </div>
                </div>
                <div className="ph-bottom">
                    <table>
                        <tbody>
                        {
                            (() => {
                                if (profileInfo.enrolled_courses) {
                                    return (
                                        profileInfo.enrolled_courses.map((enroll, i) => (
                                            <tr key={i}>
                                                <td>{enroll.course} | {enroll.semester}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            })()
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="post-cards">
                {userPosts.map((post) => (
                    <PostCard key={post.post_id} post_id={post.post_id} bracu_id={post.author_bracu_id}
                              author_photo={post.author_photo} user_name={post.author_name}
                              post_course={post.post_course} post_semester={post.post_semester}
                              post_date={post.date_created} post_content={post.post_content}
                              post_reaction_count={post.post_reactions.count}
                              post_comment_count={post.post_comments.count} cd_data={post.post_comments.data}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProfileMain;