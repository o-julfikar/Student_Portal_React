import './App.css';
import "./index.css"
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router";
import Nav from "./components/navbar/Nav";
import Forum from "./components/forum/Forum";
import Notifications from "./components/notifications/Notifications";
import Review from "./components/review/Review";
import Swap from "./components/swap/Swap";
import Login from "./components/accounts/Login";
import RequireAuth from "./components/accounts/RequireAuth";
import Profile from "./components/profile/Profile";
import {methods, urls} from "./components/SPApi";
import {useEffect, useState} from "react";
import {SPCookies as cookies} from "./components/SPCookies";
import {initialStates} from "./components/InitialStates"
import {AdminPanel} from "./components/admin/AdminPanel";
import CourseState from "./contexts/swap/CourseState"
import CourseSectionState from "./contexts/swap/CourseSectionState";
import OffersState from "./contexts/swap/OffersState";
import PrefersState from "./contexts/swap/PrefersState";
import SlotState from "./contexts/swap/SlotState";
import TeachState from "./contexts/swap/TeachState";
import LearnState from "./contexts/swap/LearnState";
import SectionSwapCardsState from "./contexts/swap/SectionSwapCardsState";
import StudySwapCardsState from "./contexts/swap/StudySwapCardsState";
import SectionSwapHistoryState from "./contexts/swap/SectionSwapHistoryState";
import StudySwapHistoryState from "./contexts/swap/StudySwapHistoryState";
import NotificationState from "./contexts/notifications/NotificationState";


const section = [0, 0]

function App() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [refreshEnrolledCourses, setRefreshEnrolledCourses] = useState(true);
    const [userInfo, setUserInfo] = useState([]);
    const [profileId, setProfileId] = useState(0);
    const [profileInfo, setProfileInfo] = useState([]);
    const [refreshUserInfo, setRefreshUserInfo] = useState(true);
    const [posts, setPosts] = useState([initialStates.posts])
    const [userPosts, setUserPosts] = useState([])
    const [refreshPost, setRefreshPost] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();

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
                console.log(data)
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
        fetch(urls.get_post, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setPosts(data)
                }
            }).catch(error => console.log(error))
    }, [refreshPost, location])

    useEffect(() => {
        fetch(urls.get_post + `${profileId}`, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setUserPosts(data)
                }
            }).catch(error => console.log(error))
    }, [profileId])

    function login() {
        let login_data = {
            bracu_id: document.getElementById('bracu-id').value,
            password: document.getElementById('user-password').value,
        }

        fetch(urls.login, methods.post(login_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    navigate("/")
                } else {
                    alert("Invalid login")
                }
            }).catch(error => {
            console.log(error)
        }).finally(() => {
            setRefreshUserInfo(!refreshUserInfo);
            setRefreshEnrolledCourses(!refreshEnrolledCourses);
        });
    }

    function logout() {
        fetch(urls.logout, methods.get())
            .then(r => r.json())
            .catch(error => {
                console.log(error)
            }).finally(() => {
            setRefreshUserInfo(!refreshUserInfo);
            setRefreshEnrolledCourses(!refreshEnrolledCourses);
            cookies.setCookie('spsid', null, 0);
            navigate("/")
        });
    }

    function create_post(post_data, setPostValue, setCourseSemester, button) {
        fetch(urls.create_post, methods.post(post_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshPost(!refreshPost);
                    setPostValue("");
                    setCourseSemester("");
                    button.blur();
                }
            }).catch(error => console.log(error))
    }

    function create_comment(comment_data) {
        fetch(urls.create_comment, methods.post(comment_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshPost(!refreshPost);
                }
            })
    }

    useEffect(() => {
        document.getElementById("SP-App").scrollTo(0, 0)
    }, [location])


    function customNav(currentPage) {
        if (currentPage !== section[1]) {
            section[0] = section[1]
            section[1] = currentPage;
        }
    }

    return (
        <div className={"App"} id={"SP-App"}>
            <RequireAuth>

                <Nav states={{
                    userInfo: userInfo,
                }} logout={logout}/>
            </RequireAuth>
            <div className="container">
                <CourseState>
                    <CourseSectionState>
                        <OffersState>
                            <PrefersState>
                                <SlotState>
                                    <TeachState>
                                        <LearnState>
                                            <SectionSwapCardsState>
                                                <SectionSwapHistoryState>
                                                    <StudySwapCardsState>
                                                        <StudySwapHistoryState>
                                                            <NotificationState>
                                                                <Routes>
                                                                    <Route exact path={""}
                                                                           element={<Navigate to={"forum"}/>}/>
                                                                    <Route exact path="/forum/*" element={
                                                                        <RequireAuth>
                                                                            <Forum customNav={customNav}
                                                                                   section={section}
                                                                                   states={{
                                                                                       enrolledCourses: enrolledCourses,
                                                                                       posts: posts,
                                                                                       refreshEnrolledCourses: refreshEnrolledCourses,
                                                                                       setEnrolledCourses: setEnrolledCourses,
                                                                                       setRefreshEnrolledCourses: setRefreshEnrolledCourses,
                                                                                       setRefreshPost: setRefreshPost,
                                                                                   }}
                                                                                   functions={{
                                                                                       create_post: create_post,
                                                                                       create_comment: create_comment
                                                                                   }}/>
                                                                        </RequireAuth>
                                                                    }/>
                                                                    <Route path="/review/*" element={
                                                                        <RequireAuth>
                                                                            <Review customNav={customNav}
                                                                                    section={section}/>
                                                                        </RequireAuth>
                                                                    }/>
                                                                    <Route path="/swap/*" element={
                                                                        <RequireAuth>
                                                                            <Swap customNav={customNav}
                                                                                  section={section}/>
                                                                        </RequireAuth>
                                                                    }/>
                                                                    <Route exact path="/notifications" element={
                                                                        <RequireAuth>
                                                                            <Notifications setSection={customNav}
                                                                                           section={section}/>
                                                                        </RequireAuth>
                                                                    }/>
                                                                    <Route path="/profile/*" element={
                                                                        <RequireAuth>
                                                                            <Profile
                                                                                states={{
                                                                                    setSection: customNav,
                                                                                    section: section,
                                                                                    userPosts: userPosts,
                                                                                    posts: posts,
                                                                                    enrolledCourses: enrolledCourses,
                                                                                    setEnrolledCourses: setEnrolledCourses,
                                                                                    refreshEnrolledCourses: refreshEnrolledCourses,
                                                                                    setRefreshEnrolledCourses: setRefreshEnrolledCourses,
                                                                                    userInfo: userInfo,
                                                                                    profileInfo: profileInfo,
                                                                                    setUserInfo: setUserInfo,
                                                                                    setProfileId: setProfileId,
                                                                                    refreshUserInfo: refreshUserInfo,
                                                                                    setRefreshUserInfo: setRefreshUserInfo,
                                                                                }}
                                                                                functions={{
                                                                                    create_comment: create_comment
                                                                                }}
                                                                            />
                                                                        </RequireAuth>
                                                                    }/>
                                                                    <Route path={"/admin/*"} element={
                                                                        <RequireAuth>
                                                                            <AdminPanel

                                                                            />
                                                                        </RequireAuth>
                                                                    }/>
                                                                    <Route path="/login/*"
                                                                           element={<Login login={login}
                                                                                           states={{}}/>}/>
                                                                    <Route path={"*"}
                                                                           element={<h1>404: Page not found</h1>}/>
                                                                </Routes>
                                                            </NotificationState>
                                                        </StudySwapHistoryState>
                                                    </StudySwapCardsState>
                                                </SectionSwapHistoryState>
                                            </SectionSwapCardsState>
                                        </LearnState>
                                    </TeachState>
                                </SlotState>
                            </PrefersState>
                        </OffersState>
                    </CourseSectionState>

                </CourseState>

            </div>
        </div>
    );
}

export default App;
