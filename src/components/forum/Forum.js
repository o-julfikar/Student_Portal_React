import React from "react";
import NewPostCard from "./components/NewPostCard";
import "./styles/Forum.css"
import PostCard from "./components/PostCard";
import user_picture from "../../icons/userphoto_default.png";

const Forum = () => {
    return (
        <div className={"forum"}>
            <NewPostCard/>
            {/*<div className="post-cards">*/}
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
                <PostCard user_name = "Abu Hasnayen Zillanee" course = "CSE341" semester = "Fall 2021"
                          post_date = "Sunday, October 10, 2021 at 3:18 PM"
                          content = "Happy birthday to the most sentiখোড় মহিলা | মানে এতো কেন সেন্টি খাস | মাঝে মাঝে ভয় পাওয়ায়
                                     দেস | যাই হোক আজ তোর দিন, দিনটা উপভোগ কর, মজা কর, আর এই বার্থডে তে নো গিফট ফ্রোম মাইন | আমার
                                     পাওনা গুলা সোধ কর আগে।| 😅 কিভাবে কিভাবে যেনো বন্ধু্ত্বটা হলো আবার এতগুলো সময় পেরিয়ে গেলো। মাঝে মাঝে মানুষ
                                     যখন জিজ্ঞাসা করে তোর সাথে বন্ধুত্ব কিভাবে, বলতে গিয়ে আমিও হারিয়ে যাই |"
                          reaction_count = "101.4K" comment_count = "3.64K" cd_data = {[
                                    {
                                        cd_userimage: user_picture,
                                        cd_username: "Sayed Md. Rahmat Ullah Afsan",
                                        cd_date: "November 1, 2021 at 4:13 PM",
                                        cd_content: "আসলে তুই একটা ব্লেসিং !!!"
                                    }, {
                                        cd_userimage: user_picture,
                                        cd_username: "G M Sohanur Rahman",
                                        cd_date: "October 16, 2021 at 5:08 PM",
                                        cd_content: "exam will start from 6.30"
                                    }
                                ]}
                />
            {/*</div>*/}
        </div>
    )
}

export default Forum;