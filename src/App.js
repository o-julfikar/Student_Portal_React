import './App.css';
import "./index.css"
import {Navigate, Route, Routes, useNavigate} from "react-router";
import Nav from "./components/navbar/Nav";
import Forum from "./components/forum/Forum";
import Notifications from "./components/notifications/Notifications";
import Review from "./components/review/Review";
import Swap from "./components/swap/Swap";
import StudySwap from "./components/swap/components/StudySwap";
import SectionSwap from "./components/swap/components/SectionSwap";
import Login from "./components/accounts/Login";
import RequireAuth from "./components/accounts/RequireAuth";
import Profile from "./components/profile/Profile";
import {methods, urls} from "./components/SPApi";
import {useEffect, useState} from "react";
import {SPCookies as cookies} from "./components/SPCookies";


function App() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [refreshEnrolledCourses, setRefreshEnrolledCourses] = useState(true);
    const [profileInfo, setProfileInfo] = useState([]);
    const [refreshProfileInfo, setRefreshProfileInfo] = useState(true);
    const [posts, setPosts] = useState([])
    const [refreshPost, setRefreshPost] = useState(true)
    const navigate = useNavigate();
    // const location = useLocation();

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
                    setProfileInfo(data)
                } else {
                    setProfileInfo([])
                    // setRefreshProfileInfo(!refreshProfileInfo)
                }
            }).catch(error => console.log(error))
        return () => {

        }
    }, [refreshProfileInfo])

    useEffect(() => {

    }, [refreshPost])

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
                setRefreshProfileInfo(!refreshProfileInfo);
                setRefreshEnrolledCourses(!refreshEnrolledCourses);
            });
    }

    function logout() {
        fetch(urls.logout, methods.get())
                .then(r => r.json())
                .catch(error => {
                    console.log(error)
                }).finally(() => {
                    setRefreshProfileInfo(!refreshProfileInfo);
                    setRefreshEnrolledCourses(!refreshEnrolledCourses);
                    cookies.setCookie('spsid', null, 0);
                    navigate("/")
        });
    }

    function create_post(post_data) {
        fetch(urls.create_post, methods.post(post_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setRefreshPost(!refreshPost);
                }
            }).catch(error => console.log(error))
    }

    let section = [0, 0];

    const customNav = (newNavIndex) => {
        section[0] = section[1];
        section[1] = newNavIndex;
    }

    return (
        <div className={"App"}>
            <Nav states = {{
                profileInfo: profileInfo,
            }} logout = {logout}/>
            <div className="container">
                <Routes>
                    <Route exact path={""} element={<Navigate to={"forum"}/>}/>
                    <Route exact path="/forum" element={
                        <RequireAuth>
                            <Forum setSection={customNav} section={section}
                                   states={{
                                       enrolledCourses: enrolledCourses,
                                       setEnrolledCourses: setEnrolledCourses,
                                       refreshEnrolledCourses: refreshEnrolledCourses,
                                       setRefreshEnrolledCourses: setRefreshEnrolledCourses,
                                       setRefreshPost: setRefreshPost,
                                   }} functions={{
                                       create_post: create_post,
                                   }}/>
                        </RequireAuth>
                    }/>
                    <Route exact path="/review" element={
                        <RequireAuth>
                            <Review customNav={customNav} section={section}/>
                        </RequireAuth>
                    }/>
                    <Route exact path="/swap" element={
                        <RequireAuth>
                            <Swap customNav={customNav} section={section}/>
                        </RequireAuth>
                    }>
                        <Route exact path={""} element={<Navigate replace to={"section"}/>}/>
                        <Route exact path={"section"} element={
                            <RequireAuth>
                                <SectionSwap/>
                            </RequireAuth>
                        }/>
                        <Route exact path={"study"} element={
                            <RequireAuth>
                                <StudySwap/>
                            </RequireAuth>
                        }/>
                    </Route>
                    <Route exact path="/notifications" element={
                        <RequireAuth>
                            <Notifications setSection = {customNav} section = {section}/>
                        </RequireAuth>
                    }/>
                    <Route path="/profile/*" element={
                        <RequireAuth>
                            <Profile states = {{
                                setSection: customNav,
                                section: section,
                                enrolledCourses: enrolledCourses,
                                setEnrolledCourses: setEnrolledCourses,
                                refreshEnrolledCourses: refreshEnrolledCourses,
                                setRefreshEnrolledCourses: setRefreshEnrolledCourses,
                                profileInfo: profileInfo,
                                setProfileInfo: setProfileInfo,
                                refreshProfileInfo: refreshProfileInfo,
                                setRefreshProfileInfo: setRefreshProfileInfo,
                            }}/>
                        </RequireAuth>
                    }/>
                    <Route path="/login/*" element={<Login login = {login} states = {{

                    }}/>}>
                    </Route>
                    <Route path={"*"} element={<h1>404: Page not found</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
