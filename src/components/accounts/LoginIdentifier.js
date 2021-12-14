import "../../styles/accounts/LoginIdentifier.css";
import React from "react";
import { useNavigate } from "react-router";
import {methods, urls} from "../SPApi";


const LoginIdentifier = (props) => {

    const navigate = useNavigate();

    function identify() {
        let identify_data = {
            bracu_id: document.getElementById("txtBracuId").value,
        }

        fetch(urls.identify, methods.post(identify_data))
            .then((r) => r.json())
            .then(data => {
                if (data === true) {
                    navigate("../existing", { state: { bracu_id: identify_data.bracu_id } })
                } else {
                    navigate("../register", { state: { bracu_id: identify_data.bracu_id } })
                }
            }).catch( function(error) {
                console.log(error)
            })
    }

    return (
        <div className="login-identifier">
            <input id={"txtBracuId"} type="number" min={1000000} placeholder={"BRACU ID"}/>
            <button className={"submit"} type={"submit"} onClick={identify}>Continue</button>
        </div>
    )
}

export default LoginIdentifier;