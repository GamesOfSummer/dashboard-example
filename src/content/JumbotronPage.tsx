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
            <h1>$130,000 per month</h1>
            <p>$70,000 from Team A</p>
            <p>$40,000 from Team B</p>
            <p>$30,000 from Team C</p>
            <p>
                <Button variant="primary">Breakdown</Button>
                <Button variant="primary">Chat with Team Leads</Button>
            </p>
        </Jumbotron>
    );
};

export default JumbotronPage;
