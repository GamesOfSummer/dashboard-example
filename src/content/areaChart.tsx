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
        {
            name: 'SUN',
            uv: 5000,
            pv: 3400,
            amt: 3200,
        },
        {
            name: 'MON',
            uv: 3000,
            pv: 1398,
            amt: 1210,
        },
        {
            name: 'TUES',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'WEDS',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'THR',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'FRI',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'SAT',
            uv: 10490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div>
            <h5>Load per week</h5>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#E66800"
                    fill="#E66800"
                />
                <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#FAAE70"
                    fill="#FAAE70"
                />
                <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffffff"
                />
            </AreaChart>
        </div>
    );
};

export default AreaChartExample;
