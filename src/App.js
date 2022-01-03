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
import {useContext, useEffect, useState} from "react";
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
import PostIdsContext from "./contexts/forum/PostIdsContext";
import PostIdsState from "./contexts/forum/PostIdsState";
import UserInfoState from "./contexts/account/UserInfoState";


const section = [0, 0]

function App() {
    const location = useLocation();

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
        <UserInfoState>
            <div className={"App"} id={"SP-App"}>
                <Nav/>
                <div className="container">
                    <CourseState>
                        <CourseSectionState>
                            <PostIdsState>
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
                                                                                           />
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
                                                                                    <Notifications
                                                                                        setSection={customNav}
                                                                                        section={section}/>
                                                                                </RequireAuth>
                                                                            }/>
                                                                            <Route path="/profile/*" element={
                                                                                <RequireAuth>
                                                                                    <Profile
                                                                                        states={{
                                                                                            setSection: customNav,
                                                                                            section: section,
                                                                                        }}
                                                                                        functions={{
                                                                                            // create_comment: create_comment
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
                                                                                   element={
                                                                                       <Login />
                                                                                   }
                                                                            />
                                                                            <Route path={"*"}
                                                                                   element={<h1>404: Page not
                                                                                       found</h1>
                                                                                   }
                                                                            />
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
                            </PostIdsState>
                        </CourseSectionState>

                    </CourseState>

                </div>
            </div>
        </UserInfoState>
    );
}

export default App;
