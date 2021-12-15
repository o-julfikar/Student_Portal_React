function postFunction(data) {
    return {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
}

function getMethod() {
    return {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    }
}


let base_url = "http://127.0.0.1:8000/"
// base_url = "http://192.168.9.48:8000/"
// base_url = "https://4636-223-29-215-10.ngrok.io/";

let urls = {
    basic_info: base_url + "user/basic-info/",
    identify: base_url + "user/identify/",
    login: base_url + "user/login/",
    logout: base_url + "user/logout/",
    auth: base_url + "user/auth/",
    register: base_url + "user/register/",
}

let methods = {
    post: postFunction,
    get: getMethod,
}

export {
    urls,
    methods,
}

