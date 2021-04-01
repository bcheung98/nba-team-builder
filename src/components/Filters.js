import React from "react";
import TeamFilter from "./TeamFilters";
import PositionFilter from "./PositionFilter";
import DraftFilter from "./DraftFilter";
import CollegeFilter from "./CollegeFilter";

const Filters = (props) => {
    return (
        <div>
            <TeamFilter setTeam={props.setTeam} />
            <PositionFilter setPosition={props.setPosition} />
            <DraftFilter setDraftYear={props.setDraftYear} />
            <CollegeFilter setCollege={props.setCollege} colleges={props.colleges} />
        </div>
    )
}

export default Filters;