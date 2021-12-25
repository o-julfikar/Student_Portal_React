import React, {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import PrefersContext from "./PrefersContext";
import {useLocation} from "react-router";


const PrefersState = (props) => {
    const location = useLocation();
    const [prefers, setPrefers] = useState();
    const [refreshPrefers, setRefreshPrefers] = useState(true);

    useEffect(() => {
        fetch(urls.get_prefer, methods.get())
            .then(r => r.json())
            .then(data => {
                setPrefers(data)
            }).catch(errors => console.log(errors));

    }, [refreshPrefers, location])

    return (
        <PrefersContext.Provider value={{
            prefers: [prefers],
            refreshPrefers: [refreshPrefers, setRefreshPrefers],
        }}>
            {props.children}
        </PrefersContext.Provider>
    )
}

export default PrefersState;