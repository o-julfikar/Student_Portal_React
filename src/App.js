import './App.css';
import "./index.css"
// import {Route} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Nav from "./components/navbar/Nav";
import Forum from "./components/forum/Forum";
import Notifications from "./components/notifications/Notifications";
import Review from "./components/review/Review";
import Swap from "./components/swap/Swap";
import StudySwap from "./components/swap/components/StudySwap";
import SectionSwap from "./components/swap/components/SectionSwap";


function App() {

  return (
    <div className="App">
        <Nav />
        <Routes>
            <Route exact path = "/" element = {<Forum/>} />
            <Route exact path = "/review" element = {<Review/>} />
            <Route exact path = "/swap" element = {<Swap/>}>
                <Route exact path={""} element={<Navigate replace to={"section"}/>}/>
                <Route exact path={"section"} element = {<SectionSwap />} />
                <Route exact path={"study"} element = {<StudySwap />}/>
            </Route>
            <Route exact path = "/notifications" element = {<Notifications/>} />
        </Routes>
    </div>
  );
}

export default App;
