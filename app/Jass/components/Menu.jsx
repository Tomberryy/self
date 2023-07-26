import { useState } from 'react';
import { Col, Row } from 'reactstrap';

const Menu = ({onSetParties, onSetTheme, theme}) => {
    const [parties, setParties] = useState([]);
    const themes = [
        {
            name: 'dark',
            textColor: 'black',
            border: 'white'
        },
        {
            name: 'white',
            textColor: 'white',
            border: 'black'
        },
        {
            name: 'orange',
            textColor: 'peru',
            border: 'black'
        },
        {
            name: 'darkblue',
            textColor: 'darkblue',
            border: 'white'
        },
        {
            name: 'lightblue',
            textColor: 'lightblue',
            border: 'black'
        },
    ]
    return (
        <div className='Menu h-100'>
            <Row className='h-100'>
                <Col sm="12" className="theme-choice d-flex justify-content-center align-items-center">
                    {themes.map(t => 
                        <i
                            key={t.name}
                            onClick={() => onSetTheme(t.name)}
                            className={`bi bi-circle${t.name === theme ? "" : "-fill"}`}
                            style={{color : t.name === theme ? t.border : t.textColor}}
                        />
                    )}
                </Col>
                <Col sm="12" className='border-top name-choice'></Col>
                <Col xs="12" className='border-top name-choice'></Col>
            </Row>
        </div>
    )
}

export default Menu
