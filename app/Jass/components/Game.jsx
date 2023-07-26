import { useState } from "react";
import { useFingerEvents } from "react-finger";
import Overview from "./Pannels/Overview";

const Game = (parties) => {
    const [pannel, setPannel] = useState("overview");
    const [score, setScore] = useState({
        partyOne: 0,
        partyTwo: 0,
    });

    const events = useFingerEvents({
        onTap: (event) => console.log("onTap", event),
        onSwipe: (event) => console.log("onSwipe", event.direction),
    });

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
