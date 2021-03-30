import React from "react";
import TeamFilter from "./TeamFilters";
import PositionFilter from "./PositionFilter";

const Filters = (props) => {
    return (
        <div>
            <TeamFilter setTeam={props.setTeam} />
            <PositionFilter setPosition={props.setPosition} />
        </div>
    )
}

export default Filters;