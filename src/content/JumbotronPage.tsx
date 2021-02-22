import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const JumbotronPage = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/aboutme');
    }

    return (
        <Jumbotron>
            <h1>$13,500 per month</h1>
            <p>Includes costs</p>
            <p>
                <Button variant="primary" onClick={handleClick}>
                    Breakdown
                </Button>
            </p>
        </Jumbotron>
    );
};

export default JumbotronPage;
