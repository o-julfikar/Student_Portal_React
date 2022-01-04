import StudySwapCardsContext from "./StudySwapCardsContext";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";

const StudySwapCardsState = (props) => {
    const location = useLocation();
    const [selectedStudySwapRequest, setSelectedStudySwapRequest] = useState(-1);
    const [refreshStudySwapCards, setRefreshStudySwapCards] = useState(true);
    const [studySwapCards, setStudySwapCards] = useState({
        study_swap_request_id: -1,
        study_swap_request_creator_bracu_id: -1,
        study_swap_request_creator_name: "",
        study_swap_request_creator_photo: "",
        study_swap_request_date_created: "",
        total_swaps: 0,
        user_accepted: 0,
        request_status: 0,
        cards: [
            {
                id: -1,
                teacher_bracu_id: -1,
                teacher_name: "",
                teacher_photo: "",
                learner_bracu_id: -1,
                learner_name: "",
                learner_photo: "",
                course_code: "",
                study_slot: ""
            }
        ]
    })

    useEffect(() => {
        if (selectedStudySwapRequest) {
            if (selectedStudySwapRequest >= 0) {
                fetch(urls.get_study_swap + "/" + selectedStudySwapRequest, methods.get())
                    .then(r => r.json())
                    .then(data => {
                        if (data) {
                            setStudySwapCards(data);
                        } else {
                            setStudySwapCards([])
                        }
                    }).catch(errors => {
                    console.log(errors);
                })
            } else {
                setStudySwapCards([])
            }
        }
    }, [refreshStudySwapCards, selectedStudySwapRequest, location])

    return (
        <StudySwapCardsContext.Provider value={{
            studySwapCards: [studySwapCards],
            refreshStudySwapCards: [refreshStudySwapCards, setRefreshStudySwapCards],
            selectedStudySwapRequestOnly: [selectedStudySwapRequest],
            selectedStudySwapRequest: [selectedStudySwapRequest, setSelectedStudySwapRequest],
            setSelectedStudySwapRequestOnly: [setSelectedStudySwapRequest],
        }}>
            {props.children}
        </StudySwapCardsContext.Provider>
    )
}

export default StudySwapCardsState;