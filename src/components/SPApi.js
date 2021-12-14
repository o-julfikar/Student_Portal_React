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

let urls = {
        identify: "http://127.0.0.1:8000/user/identify/",
        login: "http://127.0.0.1:8000/user/login/",
        auth: "http://127.0.0.1:8000/user/auth/",
        register: "http://127.0.0.1:8000/user/register/",
}

let methods = {
    post: postFunction,
    get: getMethod,
}

export {
    urls,
    methods
}

