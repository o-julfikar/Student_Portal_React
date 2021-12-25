const posts = {
    "post_id": 0,
    "author_bracu_id": 0,
    "author_name": "",
    "author_photo": "",
    "post_course": "",
    "post_content": "",
    "date_created": "",
    "post_semester": "",
    "post_reactions": {
        "count": 0,
        "data": {}
    },
    "post_comments": {
        "count": 0,
        "data": []
    }
}

const sectionState = {
    course_code: "",
    course_sections: [],
}

const initialStates = {
    posts: posts,
    sectionState: sectionState,
}

export {
    initialStates,
}