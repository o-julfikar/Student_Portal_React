import "../../styles/accounts/LoginExisting.css"
import React, {useContext} from "react";
import {useLocation, useNavigate} from "react-router";
import UserInfoContext from "../../contexts/account/UserInfoContext";
import {methods, urls} from "../SPApi";
import SectionSwapCardsContext from "../../contexts/swap/SectionSwapCardsContext";
import StudySwapCardsContext from "../../contexts/swap/StudySwapCardsContext";

const LoginExisting = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [refreshEnrolledCourses, setRefreshEnrolledCourses] = useContext(UserInfoContext).refreshEnrolledCourses
    const [refreshUserInfo, setRefreshUserInfo] = useContext(UserInfoContext).refreshUserInfo
    const [setSelectedSecSwapRequest] = useContext(SectionSwapCardsContext).setSelectedSecSwapRequestOnly
    const [setSelectedStudySwapRequest] = useContext(StudySwapCardsContext).setSelectedStudySwapRequestOnly

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
            setRefreshUserInfo(!refreshUserInfo);
            setRefreshEnrolledCourses(!refreshEnrolledCourses);
            setSelectedSecSwapRequest(-1);
            setSelectedStudySwapRequest(-1);
        });
    }

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
            <button className={"submit"} type={"submit"} onClick={login}>Sign In</button>
        </div>
    )
}

export default LoginExisting;