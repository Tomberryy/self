import { useState } from 'react';
import { Col, Row } from 'reactstrap';

const Menu = ({onSetParties, onSetTheme, theme}) => {
    const [parties, setParties] = useState([]);
    const themes = [
        'dark',
        'white',
        'purple',
        'darkblue',
        'lightblue'
    ]
    return (
        <div className='Menu h-100'>
            <Row className='h-100'>
                <Col sm="12" className="theme-choice d-flex justify-content-center align-items-center">
                    {themes.map(t => 
                        <i key={t} onClick={() => onSetTheme(t)} className={`bi bi-circle${t === theme ? "" : "-fill"} ${t}`}></i>
                    )}
                </Col>
                <Col sm="12" className='border-top name-choice'></Col>
                <Col xs="12" className='border-top name-choice'></Col>
            </Row>
        </div>
    )
}

export default Menu
