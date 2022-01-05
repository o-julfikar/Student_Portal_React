import "../../styles/accounts/Register.css"
import React, {useEffect, useState} from "react";
import icons from "../../icons/Icons";
import {useLocation, useNavigate} from "react-router";
import {methods, urls} from "../SPApi";


const Register = () => {
    const {state} = useLocation();
    const [bracuId, setBracuId] = useState(state.bracu_id)
    const navigate = useNavigate();

    useEffect(() => {
        let txtProgram = document.getElementById("txt-department");
        let txtSemester = document.getElementById("txt-semester");

        fetch(urls.get_bracu_id_info + bracuId, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    txtProgram.value = data.program;
                    txtSemester.value = data.enrolled_semester;
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [bracuId])

    function reset() {
        if (window.confirm("Are you sure you want to reset?")) {
            document.getElementById("num-bracu-id").value = ""
            document.getElementById("txt-email").value = ""
            document.getElementById("txt-password").value = ""
            document.getElementById("txt-confirm-password").value = ""
            document.getElementById("txt-full-name").value = ""
            // document.getElementById("date-birthdate").value = ""
            // document.getElementById("tel-phone").value = ""
            document.getElementById("photo-link").value = ""
            document.getElementById("img-user-photo").value = ""
            document.getElementById("txt-department").value = ""
            document.getElementById("txt-semester").value = ""
        }
    }

    function checkId(bracuId) {
        bracuId = bracuId.toString();
        let flag = true;
        if (bracuId.length !== 8) {
            alert("BRACU ID must be of 8 digits");
            flag = false;
        } else if (bracuId.at(2) < 1 || bracuId.at(2) > 3) {
            alert("3rd digit of BRACU ID must be an integer between 1 to 3 (inclusive)");
            flag = false;
        }

        return flag;
    }

    function register() {
        let register_data = {
            user: {
                bracu_id: document.getElementById("num-bracu-id").value,
                email: document.getElementById("txt-email").value,
                password: document.getElementById("txt-password").value,
                password_confirm: document.getElementById("txt-confirm-password").value,
            },
            user_detail: {
                fullname: document.getElementById("txt-full-name").value,
                // birthdate: document.getElementById("date-birthdate").value,
                // phone: document.getElementById("tel-phone").value,
                // photo: document.getElementById("img-user-photo").value,
                photo: document.getElementById("photo-link").value,
                program: document.getElementById("txt-department").value,
                semester: document.getElementById("txt-semester").value,
            }
        }

        if (!checkId(register_data.user.bracu_id)) return;

        if (register_data.user_detail.fullname.length === 0) {
            alert("Name is required")
            return;
        }

        if (!register_data.user.email.includes("@")) {
            register_data.user.email += "@g.bracu.ac.bd"
        }

        if (register_data.user.password !== register_data.user.password_confirm) {
            alert("Passwords did not match");
            return;
        }

        fetch(urls.register, methods.post(register_data))
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if (data > 0) {
                    navigate("/login/existing", {
                        state: {
                            bracu_id: register_data.user.bracu_id,
                            password: register_data.user.password
                        }
                    })
                } else {
                    alert("Failed to register your account. Please check if you made any mistake. Do not change your " +
                        "department program if the system suggest something.");
                }
            }).catch(function (error) {
            console.log(error);
            alert("Failed to register your account. Please check if you made any mistake. Do not change your " +
                "department program if the system suggest something.");
        })
    }

    return (
        <div className="register">
            <div className="top">
                <input id={"num-bracu-id"} type={"number"}
                       placeholder={"BRACU ID"} defaultValue={
                    state.bracu_id == null ? "" : state.bracu_id
                } required
                       onChange={(e) => setBracuId(e.target.value)}
                />
                <input id={"txt-full-name"} type={"text"} placeholder={"Full Name"} required/>
            </div>
            <div className="mid">
                <div className="mid-left">
                    <div className="reg-photo">
                        <img id={"img-user-photo"} src={icons.user_photo} alt="Student Photo"/>
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
                        {/*<input id={"date-birthdate"} type={"date"} placeholder={"Birthdate"}/>*/}
                        {/*<input id={'tel-phone'} type="tel" placeholder={"Phone Number"}/>*/}
                        <input id={'photo-link'} type="urls" placeholder={"Profile Picture Link"}/>
                    </div>
                    <div className="mid-right-mid">
                        <input id={"txt-department"} type="text" placeholder={"Department Program"}/>
                        <input id={"txt-semester"} type="text" placeholder={"Enrolled Semester"}/>
                    </div>
                    <div className="mid-right-bottom">
                        <input id={"txt-password"} type={"password"} placeholder={"Password"}
                               autoComplete={"password"}/>
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