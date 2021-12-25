import SlotContext from "./SlotContext";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";


const SlotState = (props) => {
    const location = useLocation();
    const [slots, setSlots] = useState(null);
    const [refreshSlots, setRefreshSlots] = useState(true);

    useEffect(() => {
        fetch(urls.get_slot, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setSlots(data)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [refreshSlots, location])


    return (
        <SlotContext.Provider value={{
            slots: [slots],
            refreshSlots: [refreshSlots, setRefreshSlots],
        }}>
            {props.children}
        </SlotContext.Provider>
    )
}

export default SlotState;
