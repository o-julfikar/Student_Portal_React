import "../../styles/accounts/Login.css"
import React from "react";
import icons from "../../icons/Icons";
import {Route, Routes, Outlet} from "react-router";


const Login = (props) => {
    return (
        <div className="login">
            <div className="login-logo">
                <img src={icons.logo} alt="Logo"/>
                <h1>Student Portal</h1>
            </div>
            <div className="login-box">
                <Outlet/>
            </div>
        </div>
    )
}

export default Login;