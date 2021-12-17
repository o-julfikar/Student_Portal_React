import "../../../styles/profile/ProfileMain.css"
import icons from "../../../icons/Icons"
import React from "react";
import PostCard from "../../forum/components/PostCard";
import {useLocation} from "react-router";


const ProfileMain = (props) => {
    props.states.setSection(4);
    let location = useLocation();
    let profileIndex = location.pathname.indexOf("/profile/")
    if (profileIndex >= 0) {
        let nextSlashIndex = location.pathname.indexOf("/", profileIndex + 9)
        if (nextSlashIndex < 0) nextSlashIndex = location.pathname.length
        let current_user_bracu_id = location.pathname.slice(profileIndex + 9, nextSlashIndex)
        props.states.setProfileId(current_user_bracu_id)
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
                                <img src={icons.user_photo} alt=""/>
                                <p>{props.states.profileInfo['admin']}</p>
                            </div>
                            <div className="ph-top-right">
                                <div className="ph-top-right-top">
                                        <p className="ph-label">Department</p>
                                        <p className="ph-value">{props.states.profileInfo['department']}</p>
                                </div>
                                <div className="ph-top-right-bottom">
                                        <p className="ph-label">Enrolled Semester</p>
                                        <p className="ph-value">{props.states.profileInfo['enrolled_semester']}</p>
                                </div>
                            </div>
                        </div>
                        <div className="ph-name">
                            <p>{props.states.profileInfo['name']}</p>
                        </div>
                        <div className="ph-top-footer">
                            <p className="ph-label">Email</p>
                            <p className="ph-value">{props.states.profileInfo['email']}</p>
                            <p className="ph-label">Enrolled Courses</p>
                        </div>
                    </div>
                    <div className="ph-bottom">
                        <table>
                            <tbody>
                                {
                                    (() => {
                                        if (props.states.profileInfo.enrolled_courses) {
                                            return (
                                                props.states.profileInfo.enrolled_courses.map((enroll, i) => (
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
                    {props.states.userPosts.map((post) => (
                        <PostCard key={post.post_id} bracu_id={post.author_bracu_id} user_name={post.author_name} course={post.course}
                                  semester={post.semester} post_date={post.date_created} content={post.content}
                                  reaction_count={post.reactions.count} comment_count={post.comments.count}
                                  cd_data={post.comments.data}
                        />
                    ))}
                </div>
            </div>
    )
}

export default ProfileMain;