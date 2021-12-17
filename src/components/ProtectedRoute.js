import React, {useState} from "react";
import {Navigate, Outlet} from "react-router"
import {methods, urls} from "./SPApi";


export const ProtectedRoute = () => {
    const [auth, setAuth] = useState(null)

    fetch(urls.auth, methods.get())
        .then(r => r.json())
        .then(data => {
            setAuth(data)
        }).catch(error => {
            console.log(error);
    })

    return (
        auth == null? null : (auth? <Outlet /> : <Navigate to={"/login"}/>)
    )
}
