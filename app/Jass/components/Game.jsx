import { useState } from "react";
import { useFingerEvents } from "react-finger";
import { Overview, ScoreWriter, AddNumbers} from "./Pannels";
import { useSelector } from "react-redux";

const Game = () => {
    const { parties } = useSelector(state => state.jass);
    const [pannel, setPannel] = useState(1);

    const events = useFingerEvents({
        onSwipe: (event) => {
            if (event === "right" && pannel > 0)
                setPannel(pannel-1);
            if (event === "left" && pannel < 2)
                setPannel(pannel+1);
        },
    });

    const pannels = [
        <ScoreWriter />,
        <Overview />,
        <AddNumbers />
    ]

    return (
        <div {...events} className="h-100">
            {
                {
                    'overview': <Overview />
                }[pannel]
            }
        </div>
    );
};

export default Game;
