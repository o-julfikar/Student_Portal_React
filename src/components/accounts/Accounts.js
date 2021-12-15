import {methods, urls} from "../SPApi";
import {SPCookies as cookies} from "../SPCookies";

function Logout(navigate) {
    fetch(urls.logout, methods.get())
            .then(r => r.json())
            .catch(error => {
                console.log(error)
            }).finally(() => {
                cookies.setCookie('spsid', null, 0);
                navigate("/")
    });
}
//
// function Register(navigate) {
//
// }

export {
    Logout,
}