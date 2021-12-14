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
import {ProtectedRoute} from "./components/ProtectedRoute";


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
                    <Route exact path={""} element={<ProtectedRoute/>}>
                        <Route exact path={""} element={<Navigate to={"forum"}/>}/>
                        <Route exact path="/forum" element={<Forum setSection = {customNav} section = {section}/>}/>
                        <Route exact path="/review" element={<Review customNav = {customNav} section = {section}/>}/>
                        <Route exact path="/swap" element={<Swap customNav = {customNav} section = {section}/>}>
                            <Route exact path={""} element={<Navigate replace to={"section"}/>}/>
                            <Route exact path={"section"} element={<SectionSwap/>}/>
                            <Route exact path={"study"} element={<StudySwap/>}/>
                        </Route>
                        <Route exact path="/notifications" element={<Notifications setSection = {customNav} section = {section}/>}/>
                        <Route path="/profile" element={<Profile setSection = {customNav} section = {section}/>}/>
                        <Route path={"*"} element={<h1>404: Page not found</h1>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}>
                        <Route exact path="" element={<Navigate replace to={"identifier"}/>}/>
                        <Route exact path="identifier" element={<LoginIdentifier/>}/>
                        <Route exact path="existing" element={<LoginExisting/>}/>
                        <Route exact path="register" element={<Register/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
