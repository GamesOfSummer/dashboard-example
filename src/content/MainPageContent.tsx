import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import JumbotronPage from './JumbotronPage';
import AreaChartExample from './areaChart';
import PieChartExample from './pieChart';
import LineChartExample from './lineChartExample';

const MainPageContent = () => {
    return (
        <div>
            <Row>
                <Col>
                    {' '}
                    <AreaChartExample />
                    <LineChartExample />
                </Col>
                <Col>
                    {' '}
                    <Card>
                        <Card.Body>You have one new notification.</Card.Body>
                    </Card>
                    <JumbotronPage />
                    <PieChartExample />
                </Col>
            </Row>

            <main>
                <div className="container">{Cards()}</div>
            </main>
        </div>
    );
};

export default MainPageContent;
