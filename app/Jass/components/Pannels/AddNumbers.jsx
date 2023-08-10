import { useState } from "react";
import { Row, Col } from "reactstrap";

const AddNumbers = () => {
    const [resultTeamOne, setResultTeamOne] = useState("000");
    const [resultTeamTwo, setResultTeamTwo] = useState("000");

    const increment = (index, party) => {
        let temp = result[party];
        switch (index) {
            case 0:
                temp += 100;
            case 1:
                temp += 10;
            case 2:
                temp += 1;
        }

        if (party === 0) setResultTeamOne(temp);
        else setResultTeamTwo(temp);
    };

    const decrement = (index, party) => {
        let temp = result[party];
        switch (index) {
            case 0:
                if (temp >= 100) temp -= 100;
            case 1:
                if (temp >= 10) temp -= 10;
            case 2:
                if (temp >= 1) temp -= 1;
        }
    };

    return (
        <div className="AddNumber">
            <Row>
                <Col onClick={() => increment(0, 0)} xs={4}>
                    <i className="bi bi-chevron-up"></i>
                </Col>
                <Col onClick={() => increment(1, 0)} xs={4}>
                    <i className="bi bi-chevron-up"></i>
                </Col>
                <Col onClick={() => increment(2, 0)} xs={4}>
                    <i className="bi bi-chevron-up"></i>
                </Col>
                <Col xs={4}>{resultTeamOne[0]}</Col>
                <Col xs={4}>{resultTeamOne[1]}</Col>
                <Col xs={4}>{resultTeamOne[2]}</Col>
                <Col onClick={() => decrement(0, 0)} xs={4}>
                    <i className="bi bi-chevron-down"></i>
                </Col>
                <Col onClick={() => decrement(1, 0)} xs={4}>
                    <i className="bi bi-chevron-down"></i>
                </Col>
                <Col onClick={() => decrement(2, 0)} xs={4}>
                    <i className="bi bi-chevron-down"></i>
                </Col>
            </Row>
            <Row>
                <Col onClick={() => increment(0, 1)} xs={4}>
                    <i className="bi bi-chevron-up"></i>
                </Col>
                <Col onClick={() => increment(1, 1)} xs={4}>
                    <i className="bi bi-chevron-up"></i>
                </Col>
                <Col onClick={() => increment(2, 1)} xs={4}>
                    <i className="bi bi-chevron-up"></i>
                </Col>
                <Col xs={4}>{resultTeamTwo[0]}</Col>
                <Col xs={4}>{resultTeamTwo[1]}</Col>
                <Col xs={4}>{resultTeamTwo[2]}</Col>
                <Col onClick={() => decrement(0, 1)} xs={4}>
                    <i className="bi bi-chevron-down"></i>
                </Col>
                <Col onClick={() => decrement(1, 1)} xs={4}>
                    <i className="bi bi-chevron-down"></i>
                </Col>
                <Col onClick={() => decrement(2, 1)} xs={4}>
                    <i className="bi bi-chevron-down"></i>
                </Col>
            </Row>
        </div>
    );
};

export default AddNumbers;
