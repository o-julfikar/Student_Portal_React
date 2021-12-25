import React, {useEffect, useState} from "react";
import OfferContext from "./OffersContext";
import {methods, urls} from "../../components/SPApi";
import {useLocation} from "react-router";


const OffersState = (props) => {
    const location = useLocation();
    const [offers, setOffers] = useState([]);
    const [refreshOffers, setRefreshOffers] = useState(true);

    useEffect(() => {
        fetch(urls.get_offer, methods.get())
            .then(r => r.json())
            .then(data => {
                setOffers(data)
            }).catch(errors => console.log(errors));

    }, [refreshOffers, location])

    return (
        <OfferContext.Provider value={{
            offers: [offers],
            refreshOffers: [refreshOffers, setRefreshOffers],
        }}>
            {props.children}
        </OfferContext.Provider>
    )
}

export default OffersState;