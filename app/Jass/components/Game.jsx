import { useState } from "react";
import { useFingerEvents } from "react-finger";
import Overview from "./Pannels/Overview";
import ScoreWriter from "./Pannels/ScoreWriter";
import AddNumbers from "./Pannels/AddNumbers";
import Swipable from "./Pannels/PannelsComponents/Swipable";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

const Game = () => {
    const { parties } = useSelector((state) => state.jass);
    const [pannel, setPannel] = useState(1);

    const events = useFingerEvents({
        onSwipe: (event) => {
            handleSwipe(event.direction);
        },
    });

    const handleSwipe = (direction) => {
        if (direction === "right" && pannel > 0) setPannel(pannel - 1);
        if (direction === "left" && pannel < 2) setPannel(pannel + 1);
    };

    console.log(pannel);

    return (
        <div {...events} className="Game h-100">
            <Row>
                <Col xs={1}>
                    {pannel !== 2 && (
                        <Swipable
                            direction="left"
                            onClick={() => handleSwipe("left")}
                        />
                    )}
                </Col>
                <Col xs={10}>
                    {
                        {
                            0: <ScoreWriter />,
                            1: <Overview />,
                            2: <AddNumbers />,
                        }[pannel]
                    }
                </Col>
                <Col xs={1}>
                    {pannel !== 0 && (
                        <Swipable
                            direction="right"
                            onClick={() => handleSwipe("right")}
                        />
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default Game;
