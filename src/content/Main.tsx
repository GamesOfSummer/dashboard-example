import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPageContent from './MainPageContent';

const Main = () => {
    return (
        <div>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={MainPageContent} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Main;
