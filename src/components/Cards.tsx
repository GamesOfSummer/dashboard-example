import React from 'react';
import { Row } from 'react-bootstrap';
import CardExample from './Card';

const Cards = () => {
    return (
        <Row>
            {CardExample(
                'Git Alias',
                '/freebies/gitalias',
                'Supercharge your git-fu!'
            )}
            {CardExample(
                'React App Checklist',
                '/freebies/ReactAppChecklist',
                'Powerhouse your React!'
            )}
            {CardExample('(Coming Soon) The Books you Need to Read', '', '')}
            {CardExample('(Coming Soon) Problems in the Workplace', '', '')}
        </Row>
    );
};

export default Cards;
