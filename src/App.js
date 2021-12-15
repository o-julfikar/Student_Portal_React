import './App.css';
import "./index.css"
import {Navigate, Route, Routes} from "react-router";
import Nav from "./components/navbar/Nav";
import Forum from "./components/forum/Forum";
import Notifications from "./components/notifications/Notifications";
import Review from "./components/review/Review";
import Swap from "./components/swap/Swap";
import StudySwap from "./components/swap/components/StudySwap";
import SectionSwap from "./components/swap/components/SectionSwap";
import Profile from "./components/profile/Profile";
import Login from "./components/accounts/Login";
import LoginExisting from "./components/accounts/LoginExisting";
import LoginIdentifier from "./components/accounts/LoginIdentifier";
import Register from "./components/accounts/Register";
import RequireAuth from "./components/accounts/RequireAuth";


function App() {
    let section = [0, 0];

    const customNav = (newNavIndex) => {
        section[0] = section[1];
        section[1] = newNavIndex;
    }

    return (
        <div className={"App"}>
            <Nav/>
            <div className="container">
                <Routes>
                    {/*<Route exact path={""} element={*/}
                    {/*    <RequireAuth>*/}
                    {/*</RequireAuth>*/}
                    {/*}/>*/}

                    <Route exact path={""} element={<Navigate to={"forum"}/>}/>
                    <Route exact path="/forum" element={
                        <RequireAuth>
                            <Forum setSection={customNav} section={section}/>
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
                    <Route path="/profile" element={
                        <RequireAuth>
                            <Profile setSection = {customNav} section = {section}/>
                        </RequireAuth>
                    }/>
                    <Route path="/login" element={<Login/>}>
                        <Route exact path="" element={<Navigate replace to={"identifier"}/>}/>
                        <Route exact path="identifier" element={<LoginIdentifier/>}/>
                        <Route exact path="existing" element={<LoginExisting/>}/>
                        <Route exact path="register" element={<Register/>}/>
                    </Route>
                    <Route path={"*"} element={<h1>404: Page not found</h1>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
