import SectionSwapCardsContext from "./SectionSwapCardsContext";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";

const SectionSwapCardsState = (props) => {
    const location = useLocation();
    const [selectedSecSwapRequest, setSelectedSecSwapRequest] = useState(-1);
    const [refreshSecSwapCards, setRefreshSecSwapCards] = useState(true)
    const [secSwapCards, setSecSwapCards] = useState({
        sec_swap_request_id: -1,
        sec_swap_request_creator_bracu_id: -1,
        sec_swap_request_creator_name: "",
        sec_swap_request_creator_photo: "",
        sec_swap_request_date_created: "",
        total_swaps: 0,
        user_accepted: 0,
        request_status: 0,
        cards: [
            {
                id: -1,
                provider_bracu_id: -1,
                provider_name: "",
                popProvider: "",
                recipient_bracu_id: -1,
                recipient_name: "",
                recipient_photo: "",
                course_code: "",
                section_number: -1,
            }
        ]
    })

    useEffect(() => {
        if (selectedSecSwapRequest) {
            if (selectedSecSwapRequest >= 0) {
                fetch(urls.get_section_swap + "/" + selectedSecSwapRequest, methods.get())
                    .then(r => r.json())
                    .then(data => {
                        if (data) {
                            setSecSwapCards(data);
                        } else {
                            setSecSwapCards([])
                        }
                    }).catch(errors => {
                    console.log(errors);
                })
            } else {
                setSecSwapCards([])
            }
        }
    }, [selectedSecSwapRequest, location, refreshSecSwapCards])

    return (
        <SectionSwapCardsContext.Provider value={{
            secSwapCards: [secSwapCards],
            refreshSecSwapCards: [refreshSecSwapCards, setRefreshSecSwapCards],
            selectedSecSwapRequest: [selectedSecSwapRequest, setSelectedSecSwapRequest],
            setSelectedSecSwapRequestOnly: [setSelectedSecSwapRequest],
            selectedSecSwapRequestOnly: [selectedSecSwapRequest],
        }}>
            {props.children}
        </SectionSwapCardsContext.Provider>
    )
}

export default SectionSwapCardsState;