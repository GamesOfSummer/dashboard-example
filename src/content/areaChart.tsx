import React from 'react';
import ReactDOM from 'react-dom';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

// import "./styles.css";

const AreaChartExample = () => {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
    ];

    return (
        <div>
            <AreaChart
                width={200}
                height={60}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                />
            </AreaChart>
        </div>
    );
};

export default AreaChartExample;
