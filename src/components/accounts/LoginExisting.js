import "../../styles/accounts/LoginExisting.css"
import React from "react";
import {useLocation, useNavigate} from "react-router";
import {methods, urls} from "../SPApi";
import {SPCookies as cookies} from "../../components/SPCookies"


const LoginExisting = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();

    function login() {
        let login_data = {
            bracu_id: document.getElementById('bracu-id').value,
            password: document.getElementById('user-password').value,
        }

        fetch(urls.login, methods.post(login_data))
            .then(r => r.json())
            .then(data => {
                if (data) {
                    cookies.setCookie('spsid', data, 30);
                    navigate("../../")
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <div className="login-existing">
            <input id={'bracu-id'} type={"number"} placeholder={"BRACU ID"} defaultValue={state == null || state.bracu_id == null? "" : state.bracu_id}/>
            <input id={'user-password'} type={"password"} placeholder={"Password"}/>
            <button className={"submit"} type={"submit"} onClick={login}>Sign In</button>
        </div>
    )
}

export default LoginExisting;