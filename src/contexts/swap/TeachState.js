import TeachContext from "./TeachContext";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";


const TeachState = (props) => {
    const location = useLocation();
    const [teaches, setTeaches] = useState([])
    const [refreshTeaches, setRefreshTeaches] = useState(true)

    useEffect(() => {
        fetch(urls.get_teach, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setTeaches(data);
                }
            }).catch(errors => {
            console.log(errors);
        })
    }, [refreshTeaches, location]);

    return (
        <TeachContext.Provider value={{
            teaches: [teaches],
            refreshTeaches: [refreshTeaches, setRefreshTeaches],
        }}>
            {props.children}
        </TeachContext.Provider>
    )
}

export default TeachState;
