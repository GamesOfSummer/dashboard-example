import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import JumbotronPage from './JumbotronPage';
import AreaChartExample from './areaChart';
import PieChartExample from './pieChart';
import PieChartExample2 from './pieChart2';
import LineChartExample from './lineChartExample';

const MainPageContent = () => {
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Dashboard Example</h1>
                    <div style={{ padding: '10px' }} />
                </Col>
            </Row>

            <Row>
                <Col style={{ marginBottom: '30px' }}>
                    {' '}
                    <AreaChartExample />
                    <div style={{ padding: '10px' }} />
                    <LineChartExample />
                </Col>
                <Col>
                    {' '}
                    <Card>
                        <Card.Body>You have one new notification.</Card.Body>
                    </Card>
                    <JumbotronPage />
                    <Row>
                        {' '}
                        <Col>
                            {' '}
                            <PieChartExample />
                        </Col>
                        <Col>
                            <PieChartExample2 />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default MainPageContent;
