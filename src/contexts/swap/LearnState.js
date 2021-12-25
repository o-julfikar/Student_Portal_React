import LearnContext from "./LearnContext";
import {useEffect, useState} from "react";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";


const LearnState = (props) => {
    const location = useLocation();
    const [learns, setLearns] = useState();
    const [refreshLearns, setRefreshLearns] = useState(true);

    useEffect(() => {
        fetch(urls.get_learn, methods.get())
            .then(r => r.json())
            .then(data => {
                if (data) {
                    setLearns(data)
                }
            }).catch(errors => {
            console.log(errors)
        })
    }, [refreshLearns, location])

    return (
        <LearnContext.Provider value={{
            learns: [learns],
            refreshLearns: [refreshLearns, setRefreshLearns],
        }}>
            {props.children}
        </LearnContext.Provider>
    )
}

export default LearnState;