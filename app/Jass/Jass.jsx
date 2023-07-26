import { useState } from 'react';
import Menu from './components/Menu';
import './jass.scss';
import Game from './components/Game';

const Jass = () => {
    const [gameState, setGameState] = useState('menu');
    const [theme, setTheme]         = useState('dark');

    const onSetParties = values => {

    }

    const onSetTheme = value => {
        setTheme(value);
    }

    return (
        <div className={`Jass ${theme}`}>
            {
                {
                    'menu': <Menu onSetTheme={setTheme} onSetParties={onSetParties} theme={theme} />,
                    'game': <Game />
                }[gameState]
            }
        </div>
    )
}

export default Jass
