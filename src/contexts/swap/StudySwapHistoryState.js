import StudySwapHistoryContext from "./StudySwapHistoryContext";
import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router";
import {methods, urls} from "../../components/SPApi";
import StudySwapCardsContext from "./StudySwapCardsContext";

const StudySwapHistoryState = (props) => {
    const [selectedStudySwapRequest] = useContext(StudySwapCardsContext).selectedStudySwapRequestOnly

    const location = useLocation();
    const [refreshStudySwapHistory, setRefreshStudySwapHistory] = useState(true);
    const [studySwapHistory, setStudySwapHistory] = useState([{
        id: -1,
        date_created: "",
        is_approved: 0,
        creator: -1
    }]);

    useEffect(() => {
        fetch(urls.get_study_swap, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setStudySwapHistory(data)
                } else {
                    setStudySwapHistory([])
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [refreshStudySwapHistory, selectedStudySwapRequest, location])

    return (
        <StudySwapHistoryContext.Provider value={{
            studySwapHistoryOnly: [studySwapHistory],
            studySwapHistory: [studySwapHistory, setStudySwapHistory],
            refreshStudySwapHistory: [refreshStudySwapHistory, setRefreshStudySwapHistory],
        }}>
            {props.children}
        </StudySwapHistoryContext.Provider>
    )
}

export default StudySwapHistoryState;
