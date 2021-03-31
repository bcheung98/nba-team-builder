import React from "react";

const SortBar = (props) => {
    return (
        <React.Fragment>
            <h4 style={{margin: "5px"}}>Sort by:</h4>
            <select onChange={props.onChange}>
                <option value="name-AZ">Name (A-Z)</option>
                <option value="name-ZA">Name (Z-A)</option>
                <option value="height-asc">Height (Ascending)</option>
                <option value="height-desc">Height (Descending)</option>
                <option value="weight-asc">Weight (Ascending)</option>
                <option value="weight-desc">Weight (Descending)</option>
            </select>
        </React.Fragment>
    )
}

export default SortBar;