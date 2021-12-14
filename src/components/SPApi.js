function postFunction(data) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    }
}

function getMethod() {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
        },
        credentials: 'include',
    }
}


// const base_url = "https://08aa-223-29-215-10.ngrok.io/";
// base_url = "http://localhost:8000/"
let urls = {
    identify: "http://localhost:8000/user/identify/",
    login: "http://localhost:8000/user/login/",
    logout: "http://localhost:8000/user/logout/",
    auth: "http://localhost:8000/user/auth/",
    register: "http://localhost:8000/user/register/",
}

let methods = {
    post: postFunction,
    get: getMethod,
}

export {
    urls,
    methods,
}

