import { useState } from 'react';
import Menu from './components/Menu/Menu';
import './jass.scss';

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
                    'menu': <Menu onSetTheme={setTheme} onSetParties={onSetParties} theme={theme} />
                }[gameState]
            }
        </div>
    )
}

export default Jass
