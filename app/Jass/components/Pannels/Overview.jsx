import { useState } from "react";
import Canvas from "./Canvas";

const Overview = () => {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="Overview h-100">
            <Canvas />
        </div>
    );
};

export default Overview;
