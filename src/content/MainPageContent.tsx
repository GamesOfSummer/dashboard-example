import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
