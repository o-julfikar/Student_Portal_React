import React, {createContext, useState} from "react";


export const PageSectionContext = createContext({});

export const PageSectionProvider = (props) => {
    const [pageSection, setPageSection] = useState([0, 0])
    return (
        <PageSectionContext.Provider value={[pageSection, setPageSection]}>
            {props.children}
        </PageSectionContext.Provider>
    )
}
