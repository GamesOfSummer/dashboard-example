import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AboutMe from './AboutMe';
import MainPageContent from './MainPageContent';
import { callAsyncGetPictures } from '../redux/pictureActions';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(callAsyncGetPictures());
        };

        fetchData();
    }, []);

    return (
        <div>
            <div style={{ minHeight: '1000px' }}>
                <Router>
                    <Switch>
                        <Route path="/aboutme" component={AboutMe} />
                        <Route exact path="/" component={MainPageContent} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Main;
