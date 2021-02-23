import React from 'react';
import ReactDOM from 'react-dom';

import {
    PieChart,
    Pie,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';

// import "./styles.css";

const PieChartExample = () => {
    const COLORS = ['#009993', '#cccc99', '#cc0033'];

    const data = [
        { name: 'Active', value: 90 },
        { name: 'Errors', value: 8 },
        { name: 'Down', value: 2 },
    ];

    return (
        <div>
            <h5>Uptime</h5>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="70%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PieChartExample;
