import React from 'react';
import Cards from '../components/Cards';
import JumbotronPage from './JumbotronPage';

import LineChart2 from './graphs';
import AreaChartExample from './areaChart';

const MainPageContent = () => {
    return (
        <div>
            <AreaChartExample />
            <LineChart2 />
            <JumbotronPage />
            <main>
                <div className="container">{Cards()}</div>
            </main>
        </div>
    );
};

export default MainPageContent;
