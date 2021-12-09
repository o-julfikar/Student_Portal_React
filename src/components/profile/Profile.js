import "../../styles/profile/Profile.css"
import icons from "../../icons/Icons"
import React from "react";
import PostCard from "../forum/components/PostCard";
import user_picture from "../../icons/userphoto_default.png";


const Profile = (props) => {
    props.setSection(4);
    return (
        <div className={"transition-helper-" + (props.section[0])}>
            <div className="profile">
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
                                        <p className="ph-label">Reviews</p>
                                        <p className="ph-value">11K</p>
                                    </div>
                                </div>
                                <div className="ph-top-left-bottom">
                                    <div className="ph-top-left-bottom-left">
                                        <p className="ph-label">Section Swaps</p>
                                        <p className="ph-value">6k</p>
                                    </div>
                                    <div className="ph-top-left-bottom-right">
                                        <p className="ph-label">Study Swaps</p>
                                        <p className="ph-value">11K</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ph-top-middle">
                                <img src={icons.user_photo} alt=""/>
                                <p>Summer 2018</p>
                            </div>
                            <div className="ph-top-right">
                                <div className="ph-top-right-top">
                                        <p className="ph-label">Department</p>
                                        <p className="ph-value">Computer Science</p>
                                </div>
                                <div className="ph-top-right-bottom">
                                        <p className="ph-label">Enrolled Semester</p>
                                        <p className="ph-value">Summer 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="ph-name">
                            <p>Mohammad Zulfikar Ali Mahbub</p>
                        </div>
                        <div className="ph-top-footer">
                            <p className="ph-label">Email</p>
                            <p className="ph-value">mohammed.julfikar.ali.mahbub@g.bracu.ac.bd</p>
                            <p className="ph-label">Courses Enrolled</p>
                        </div>
                    </div>
                    <div className="ph-bottom">
                        <table>
                            <tbody>
                                <tr>
                                    <td>CSE110 | Summer 2018</td>
                                </tr>
                                <tr>
                                    <td>ENG091 | Summer 2018</td>
                                </tr>
                                <tr>
                                    <td>MAT110 | Summer 2018</td>
                                </tr>
                                <tr>
                                    <td>BNG103 | Fall 2018</td>
                                </tr>
                                <tr>
                                    <td>DEV101 | Fall 2018</td>
                                </tr>
                                <tr>
                                    <td>ENG101 | Fall 2018</td>
                                </tr>
                                <tr>
                                    <td>HUM103 | Fall 2018</td>
                                </tr>
                                <tr>
                                    <td>CSE111 | Spring 2019</td>
                                </tr>
                                <tr>
                                    <td>CSE230 | Spring 2019</td>
                                </tr>
                                <tr>
                                    <td>BUS201 | Spring 2019</td>
                                </tr>
                                <tr>
                                    <td>DEV101 | Spring 2019</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="post-cards">
                    <PostCard user_name = "Mohammad Zulfikar" course = "CSE391" semester = "Fall 2021"
                              post_date = "Thursday, November 11, 2021 at 7:34 AM"
                              content = "&quot;সমাজের কাছে হরে যায় আমাদের ইচ্ছে গুলো, বাবা মা বুঝবে কবে আমাদেরো কিছু ইচ্ছে ছিলো,
                                         তাদের চোখ দিয়ে স্বপ্ন দেখতে বলে, আমাদেরো চোখ আছে তা বুঝবে তারা কোন কালে?
                                         স্বপ্ন গুলো এভাবে দুমড়ে মুচড়ে যায়, জীবনের শেষ অংশে হতাশা পাই শুধু ঠাঁই।&quot; - Abu Hasnayen Zillanee"
                              reaction_count = "11K" comment_count = "3.6K" cd_data = {[
                                        {
                                            cd_userimage: user_picture,
                                            cd_username: "Abu Hasnayen Zillanee",
                                            cd_date: "4mins",
                                            cd_content: "যদিও এখনো পাওনা শোধ হয়নি, তবুও শুভ জন্মদিন বন্ধু।"
                                        }, {
                                            cd_userimage: user_picture,
                                            cd_username: "G M Sohanur Rahman",
                                            cd_date: "Yesterday at 5:18 PM",
                                            cd_content: "Why rest when you can be best? xDDDD"
                                        }
                                    ]}
                    />
                    <PostCard user_name = "Mohammad Zulfikar" course = "CSE391" semester = "Fall 2021"
                              post_date = "Thursday, November 11, 2021 at 7:34 AM"
                              content = "&quot;সমাজের কাছে হরে যায় আমাদের ইচ্ছে গুলো, বাবা মা বুঝবে কবে আমাদেরো কিছু ইচ্ছে ছিলো,
                                         তাদের চোখ দিয়ে স্বপ্ন দেখতে বলে, আমাদেরো চোখ আছে তা বুঝবে তারা কোন কালে?
                                         স্বপ্ন গুলো এভাবে দুমড়ে মুচড়ে যায়, জীবনের শেষ অংশে হতাশা পাই শুধু ঠাঁই।&quot; - Abu Hasnayen Zillanee"
                              reaction_count = "11K" comment_count = "3.6K" cd_data = {[
                                        {
                                            cd_userimage: user_picture,
                                            cd_username: "Abu Hasnayen Zillanee",
                                            cd_date: "4mins",
                                            cd_content: "যদিও এখনো পাওনা শোধ হয়নি, তবুও শুভ জন্মদিন বন্ধু।"
                                        }, {
                                            cd_userimage: user_picture,
                                            cd_username: "G M Sohanur Rahman",
                                            cd_date: "Yesterday at 5:18 PM",
                                            cd_content: "Why rest when you can be best? xDDDD"
                                        }
                                    ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;