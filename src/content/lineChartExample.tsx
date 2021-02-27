import React from 'react';
import ReactDOM from 'react-dom';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// import "./styles.css";

const LineChart2 = () => {
    const data = [
        {
            name: 'NOV',
            district1: 1000,
            district2: 400,
            district3: 600,
        },
        {
            name: 'DEC',
            district1: 1000,
            district2: 1398,
            district3: 1210,
        },
        {
            name: 'JAN',
            district1: 2000,
            district2: 300,
            district3: 2290,
        },
        {
            name: 'FEB',
            district1: 2780,
            district2: 3908,
            district3: 2000,
        },
        {
            name: 'MAR',
            district1: 5890,
            district2: 4800,
            district3: 2181,
        },
    ];

    return (
        <div>
            <h5>Users per Month</h5>
            <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                    type="monotone"
                    dataKey="district1"
                    stroke="#FFE1DA"
                    strokeDasharray="3 4 5 2"
                />
                <Line
                    type="monotone"
                    dataKey="district2"
                    stroke="#E66800"
                    strokeDasharray="5 5"
                />
            </LineChart>
        </div>
    );
};

export default LineChart2;
