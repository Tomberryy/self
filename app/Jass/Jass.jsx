import { useState } from 'react';
import Menu from './components/Menu';
import Game from './components/Game';
import './jass.scss';

const Jass = () => {
    const [gameState, setGameState] = useState('menu');
    const [theme, setTheme]         = useState('dark');
    const [parties, setParties]     = useState({});

    const onSetParties = values => {
        setParties({
            partyOne: values.partyOne,
            partyTwo: values.partyTwo
        })
        setGameState('game')
    }

    return (
        <div className={`Jass ${theme}`}>
            {
                {
                    'menu': <Menu onSetTheme={setTheme} onSetParties={onSetParties} theme={theme} />,
                    'game': <Game parties={parties} />
                }[gameState]
            }
        </div>
    )
}

export default Jass
