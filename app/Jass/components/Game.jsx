import { useState } from "react";
import { useFingerEvents } from "react-finger";
import Overview from "./Pannels/Overview";
import Canvas from "./Pannels/PannelsComponents/Canvas";
import ScoreWriter from "./Pannels/ScoreWriter"
import AddNumbers from "./Pannels/AddNumbers"
import { useSelector } from "react-redux";

const Game = () => {
    const { parties } = useSelector(state => state.jass);
    const [pannel, setPannel] = useState(1);

    const events = useFingerEvents({
        onSwipe: (event) => {
            console.log(event)
            if (event.direction === "right" && pannel > 0)
                setPannel(pannel - 1);
            if (event.direction === "left" && pannel < 2)
                setPannel(pannel + 1);
        },
    });

    console.log(pannel)

    return (
        <div {...events} className="Game h-100">
            {
                {
                    0: <ScoreWriter />,
                    1: <Overview />,
                    2: <AddNumbers />
                }[pannel]
            }
        </div>
    );
};

export default Game;
