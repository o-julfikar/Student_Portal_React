import "../../styles/accounts/LoginExisting.css"
import React from "react";
import {useLocation} from "react-router";

const LoginExisting = (props) => {
    const { state } = useLocation();

    return (
        <div className="login-existing">
            <input id={'bracu-id'}
                   type={"number"}
                   placeholder={"BRACU ID"}
                   defaultValue={state == null || state.bracu_id == null? "" : state.bracu_id}/>
            <input id={'user-password'}
                   type={"password"}
                   placeholder={"Password"}
                   defaultValue={state == null || state.password == null? "" : state.password}/>
            <button className={"submit"} type={"submit"} onClick={props.login}>Sign In</button>
        </div>
    )
}

export default LoginExisting;