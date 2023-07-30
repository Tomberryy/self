import { useState } from "react";
import Canvas from "./Canvas";

const Overview = () => {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const [score, setScore] = useState(randomIntFromInterval(1, 1000));

    return (
        <div className="Overview h-100">
            <Canvas score={score} />
            <button onClick={() => setScore(randomIntFromInterval(1, 1000))}>TOAST</button>
            <label>Score : {score}</label>
        </div>
    );
};

export default Overview;
