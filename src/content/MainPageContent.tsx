import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Cards from '../components/Cards';
import JumbotronPage from './JumbotronPage';

import LineChart2 from './lineChartExample';
import AreaChartExample from './areaChart';
import PieChartExample from './pieChart';

const MainPageContent = () => {
    return (
        <div>
            <Row>
                <Col>
                    {' '}
                    <AreaChartExample />
                    <LineChart2 />
                </Col>
                <Col>
                    {' '}
                    <PieChartExample />
                </Col>
            </Row>

            <JumbotronPage />
            <main>
                <div className="container">{Cards()}</div>
            </main>
        </div>
    );
};

export default MainPageContent;
