import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Main from './content/Main';
import './App.css';
import NavBarPage from './other/NavBarPage';
import FooterPage from './other/FooterPage';

const App = () => {
    const styles = {
        padding: '0px',
        fontFamily: 'futura',
        overflow: 'hidden',
    };

    return (
        <Container fluid style={styles}>
            <NavBarPage />
            <div style={{ minHeight: '800px' }}>
                <Row>
                    <Col xs={2} lg={2} />
                    <Col xs={8} lg={8}>
                        <Main />
                    </Col>
                    <Col xs={2} lg={2} />
                </Row>
            </div>
            <FooterPage />
        </Container>
    );
};

export default App;
