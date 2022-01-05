import "../../styles/accounts/Login.css"
import React from "react";
import icons from "../../icons/Icons";
import {Navigate, Route, Routes} from "react-router";
import LoginIdentifier from "./LoginIdentifier";
import LoginExisting from "./LoginExisting";
import Register from "./Register";


const Login = () => {
    return (
        <div className="login">
            <div className="login-box">
                <Routes>
                    <Route exact path="" element={<Navigate replace to={"identifier"}/>}/>
                    <Route exact path="identifier" element={<LoginIdentifier/>}/>
                    <Route exact path="existing" element={<LoginExisting/>}/>
                    <Route exact path="register" element={<Register/>}/>
                </Routes>
            </div>
            <div className="login-logo">
                <img src={icons.logo} alt="Logo"/>
                <h1>Student Portal</h1>
            </div>
        </div>
    )
}

export default Login;