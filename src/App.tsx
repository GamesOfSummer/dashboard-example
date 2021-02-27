import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Main from './content/Main';
import './App.css';
import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';
import NavBarPage from './other/NavBarPage';
import FooterPage from './other/FooterPage';

const App = () => {
    const composeEnhancers = composeWithDevTools({
        trace: true,
        traceLimit: 10,
    });
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(invariant(), sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    const styles = {
        padding: '0px',
        fontFamily: 'futura',
        overflow: 'hidden',
    };

    return (
        <Provider store={store}>
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
        </Provider>
    );
};

export default App;
