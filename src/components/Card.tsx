import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getPicturesFromState } from './getPicture';

const CardExample = (title: string, route: string, summary: string) => {
    const history = useHistory();

    function handleClick() {
        history.push(route);
    }

    return (
        <Col>
            <Card.Img variant="top" src={getPicturesFromState()} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                <Button variant="primary" onClick={() => handleClick()}>
                    Read More
                </Button>
            </Card.Body>
        </Col>
    );
};

export default CardExample;
