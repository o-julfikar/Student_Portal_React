import './App.css';
import "./index.css"
// import {Route} from "react-router-dom";
import {Routes, Route} from "react-router";
import Nav from "./components/navbar/Nav";
import Forum from "./components/forum/Forum";
import Notifications from "./components/notifications/Notifications";
import Review from "./components/review/Review";
import Swap from "./components/swap/Swap";


function App() {

  return (
    <div className="App">
        <Nav />
        <Routes>
            <Route exact path = "/" element = {<Forum/>} />
            <Route exact path = "/review" element = {<Review/>} />
            <Route exact path = "/swap" element = {<Swap/>} />
            <Route exact path = "/notifications" element = {<Notifications/>} />
        </Routes>
    </div>
  );
}

export default App;
