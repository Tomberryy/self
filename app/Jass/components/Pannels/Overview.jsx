import Canvas from "./PannelsComponents/Canvas";
import { useSelector } from "react-redux";

const Overview = () => {
    const { parties } = useSelector((state) => state.jass);

    if (!parties)
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );

    console.log(parties, parties.partyOne.score);
    return (
        <div className="Overview h-100">

            <h2>{parties.partyOne.name} - {parties.partyOne.score}</h2>
            <Canvas score={parties.partyOne.score} />
            <h2>{parties.partyTwo.name} - {parties.partyTwo.score}</h2>
            <Canvas score={parties.partyTwo.score} />
        </div>
    );
};

export default Overview;
