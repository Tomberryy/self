import { useState } from 'react';
import { Button, Col, Input, Label, Row } from 'reactstrap';

const Menu = ({onSetParties, onSetTheme, theme}) => {
    const [partyOne, setPartyOne] = useState("Us");
    const [partyTwo, setPartyTwo] = useState("Them");
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

    const handleParties = () => {
        if (partyOne && partyTwo) {
            onSetParties({
                partyOne: partyOne,
                partyTwo: partyTwo
            })
        }
    }

    return (
        <div className='Menu h-100'>
            <Row className='menu-row'>
                <h1 className='text-center mt-5'>JASS</h1>
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
                <Col sm="12">
                    <Label>TEAM 1</Label>
                    <Input type="text" className="text-center mb-2" value={partyOne} onChange={(e) => setPartyOne(e.target.value)} />
                    <Label>TEAM 2</Label>
                    <Input type="text" className="text-center" value={partyTwo} onChange={(e) => setPartyTwo(e.target.value)} />
                    <Button color="success" className="w-100 mt-3" onClick={handleParties}>Play <i className='bi bi-suit-spade-fill'></i></Button>
                </Col>
            </Row>
        </div>
    )
}

export default Menu
