import SectionSwapHistoryContext from "./SectionSwapHistoryContext";
import {useContext, useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";
import SectionSwapCardsContext from "./SectionSwapCardsContext";

const SectionSwapHistoryState = (props) => {
    const [selectedSecSwapRequest] = useContext(SectionSwapCardsContext).selectedSecSwapRequestOnly

    const location = useLocation();
    const [refreshSectionSwapHistory, setRefreshSectionSwapHistory] = useState(true);
    const [sectionSwapHistory, setSectionSwapHistory] = useState([{
        id: -1,
        date_created: "",
        is_approved: 0,
        creator: -1
    }]);

    useEffect(() => {
        fetch(urls.get_section_swap, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setSectionSwapHistory(data)
                } else {
                    setSectionSwapHistory([])
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [refreshSectionSwapHistory, selectedSecSwapRequest, location])

    return (
        <SectionSwapHistoryContext.Provider value={{
            sectionSwapHistoryOnly: [sectionSwapHistory],
            sectionSwapHistory: [sectionSwapHistory, setSectionSwapHistory],
            refreshSectionSwapHistory: [refreshSectionSwapHistory, setRefreshSectionSwapHistory],
        }}>
            {props.children}
        </SectionSwapHistoryContext.Provider>
    )
}

export default SectionSwapHistoryState;