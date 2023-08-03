import { useState } from "react";
import Canvas from "./Canvas";
import { useSelector } from "react-redux";

const Overview = () => {
    const { parties } = useSelector(state => state.jass);

    if (!parties)
        return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        )
    return (
        <div className="Overview h-100">
            <Canvas data={parties.partyOne.score} />
            <Canvas data={parties.partyTwo.score} />
        </div>
    );
};

export default Overview;
