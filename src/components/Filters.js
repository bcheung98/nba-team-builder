import React from "react";
import TeamFilter from "./TeamFilters";
import PositionFilter from "./PositionFilter";
import DraftFilter from "./DraftFilter";

const Filters = (props) => {
    return (
        <div>
            <TeamFilter setTeam={props.setTeam} />
            <PositionFilter setPosition={props.setPosition} />
            <DraftFilter setDraftYear={props.setDraftYear} />
        </div>
    )
}

export default Filters;