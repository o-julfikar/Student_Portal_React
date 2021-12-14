import "../../styles/accounts/Register.css"
import React from "react";
import icons from "../../icons/Icons";
import {useLocation} from "react-router";
import * as url from "url";
import {methods, urls} from "../SPApi";


const Register = (props) => {
    const { state } = useLocation();

    function reset() {
        document.getElementById("num-bracu-id").value = ""
        document.getElementById("txt-email").value = ""
        document.getElementById("txt-password").value = ""
        document.getElementById("txt-confirm-password").value = ""
        document.getElementById("txt-full-name").value = ""
        document.getElementById("date-birthdate").value = ""
        document.getElementById("tel-phone").value = ""
        document.getElementById("img-user-photo").value = ""
        document.getElementById("txt-department").value = ""
        document.getElementById("txt-semester").value = ""
    }

    function register() {
        let register_data = {
            user: {
                bracu_id: document.getElementById("num-bracu-id").value,
                email: document.getElementById("txt-email").value,
                password: document.getElementById("txt-password").value,
                password_confirm: document.getElementById("txt-confirm-password").value,
            },
            student: {
                fullname: document.getElementById("txt-full-name").value,
                birthdate: document.getElementById("date-birthdate").value,
                phone: document.getElementById("tel-phone").value,
                photo: document.getElementById("img-user-photo").value,
                program: document.getElementById("txt-department").value,
                semester: document.getElementById("txt-semester").value,
            }
        }

        if (register_data.student.password !== register_data.student.password_confirm) {
            alert("Passwords did not match");
            return;
        }

        console.log(JSON.stringify(register_data));

        fetch(urls.register, methods.post(register_data))
            .then(r => r.json())
            .then(data => {
                console.log(data)
            }).catch(function (error) {
                console.log(error);
        })
    }

    return (
        <div className="register">
            <div className="top">
                <input id={"num-bracu-id"} type={"number"} placeholder={"BRACU ID"} defaultValue={state == null || state.bracu_id == null? "" : state.bracu_id} required/>
                <input id={"txt-full-name"} type={"text"} placeholder={"Full Name"} required/>
            </div>
            <div className="mid">
                <div className="mid-left">
                    <div className="reg-photo">
                        <img id={"img-user-photo"} src={icons.user_photo} alt=""/>
                        <p id={"txt-remove"}>Remove</p>
                    </div>
                    <button className={"submit"} type={"button"}>Upload</button>
                </div>
                <div className="mid-right">
                    <div className="mid-right-top">
                        <label>
                            <input id={"txt-email"} type="email" placeholder={"Email"}/>
                            <p>@g.bracu.ac.bd</p>
                        </label>
                        <input id={"date-birthdate"} type={"date"} placeholder={"Birthdate"}/>
                        <input id={'tel-phone'} type="tel" placeholder={"Phone Number"}/>
                    </div>
                    <div className="mid-right-mid">
                        <input id={"txt-department"} type="text" placeholder={"Department"}/>
                        <input id={"txt-semester"} type="text" placeholder={"Enrolled Semester"}/>
                    </div>
                    <div className="mid-right-bottom">
                        <input id={"txt-password"} type={"password"} placeholder={"Password"} autoComplete={"password"}/>
                        <input id={"txt-confirm-password"} type="password" placeholder={"Confirm Password"}/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button className={"cancel"} type={"button"} onClick={reset}>Reset</button>
                <button className={"submit"} type={"submit"} onClick={register}>Sign Up</button>
            </div>
        </div>
    )
}

export default Register;