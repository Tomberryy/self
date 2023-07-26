import { useState } from 'react';
import Overview from './Pannels/Overview'

const Game = () => {
    const [score, setScore] = useState({
        partyOne: 0,
        partyTwo: 0
    });
    const [pannel, setPannel] = useState('overview ')
    return (
        <div className='Menu h-100'>
            {
                {
                    'overview': <Overview />
                }[pannel]
            }
        </div>
    )
}

export default Game
