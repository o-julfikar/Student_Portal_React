import React, {useState} from "react";
import {methods, urls} from "../SPApi";
import {Navigate, useLocation} from "react-router";

function RequireAuth({children}) {
    const location = useLocation();
    const [auth, setAuth] = useState(null);

    fetch(urls.auth, methods.get())
        .then(r => r.json())
        .then(data => {
            setAuth(data)
        })
        .catch(error => {
            console.log(error);
            setAuth(false);
        });

    return auth == null?
        null : (auth?
            children : <Navigate to={"../login"}/>)
}

export default RequireAuth;