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

function getSectionByCourse(course) {
    return base_url + `swap/course/${course}/section/get`;
}


let base_url = "http://127.0.0.1:8000/"
// base_url = "http://192.168.9.48:8000/"
// base_url = "https://1d16-223-29-215-10.ngrok.io/";

let urls = {
    auth: base_url + "user/auth/",
    basic_info: base_url + "user/basic-info/",
    unenroll_course: base_url + "user/delete-course/",
    enroll_course: base_url + "user/enroll-course/",
    enrolled_courses: base_url + "user/enrolled-courses/",
    identify: base_url + "user/identify/",
    login: base_url + "user/login/",
    logout: base_url + "user/logout/",
    profile_info: base_url + "user/profile-info/",
    register: base_url + "user/register/",

    create_post: base_url + "forum/post/create/",
    get_post: base_url + "forum/post/get/",
    get_post_by_id: base_url + "forum/post/",
    create_reaction: base_url + "forum/post/reaction/create/",
    get_reaction: base_url + "forum/post/reaction/get/",
    create_comment: base_url + "forum/post/comment/create/",
    get_comment: base_url + "forum/post/comment/get/",
    create_reply: base_url + "forum/post/reply/create/",
    get_reply: base_url + "forum/post/reply/get/",

    get_course: base_url + "swap/course/get",
    create_course: base_url + "swap/course/create",
    delete_course: base_url + "swap/course/delete",
    get_section: base_url + "swap/course/section/get",
    get_section_by_course: getSectionByCourse,
    create_section: base_url + "swap/course/section/create",
    delete_section: base_url + "swap/course/section/delete",

    get_offer: base_url + "swap/section/offer/get",
    post_offer: base_url + "swap/section/offer/post",
    delete_offer: base_url + "swap/section/offer/delete",
    get_prefer: base_url + "swap/section/prefer/get",
    post_prefer: base_url + "swap/section/prefer/post",
    delete_prefer: base_url + "swap/section/prefer/delete",

    get_slot: base_url + "swap/study/slot/get",
    post_slot: base_url + "swap/study/slot/post",
    delete_slot: base_url + "swap/study/slot/delete",
    get_teach: base_url + "swap/study/teach/get",
    post_teach: base_url + "swap/study/teach/post",
    delete_teach: base_url + "swap/study/teach/delete",
    get_learn: base_url + "swap/study/learn/get",
    post_learn: base_url + "swap/study/learn/post",
    delete_learn: base_url + "swap/study/learn/delete",

    get_section_swap: base_url + "swap/section/get",
    post_section_swap: base_url + "swap/section/post",
    delete_section_swap: base_url + "swap/section/delete",

    post_section_swap_action: base_url + "swap/section/action/post",

    get_study_swap: base_url + "swap/study/get",
    post_study_swap: base_url + "swap/study/post",
    delete_study_swap: base_url + "swap/study/delete",

    post_study_swap_action: base_url + "swap/study/action/post",

    get_notification: base_url + "notification/get",
}

let methods = {
    post: postFunction,
    get: getMethod,
}

export {
    urls,
    methods,
}

