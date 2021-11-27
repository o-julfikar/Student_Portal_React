import React from "react";
import searchIcon from "../../../icons/search-outline.svg"
import "../../../styles/navbar/SearchField.css"

const SearchField = () => {
    return (
        <div className={"search-field"}>
            <input type={"text"} id={"txtSearch"} placeholder={"Search"}/>
            <img src={searchIcon} alt={"Search Icon"}/>
        </div>
    );
};

export default SearchField;