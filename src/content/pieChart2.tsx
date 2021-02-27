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

const PieChartExample2 = () => {
    const COLORS = ['#E66800', '#FAAE70', '#FFE1DA'];

    const data = [
        { name: 'Paypal', value: 50 },
        { name: 'Venmo', value: 40 },
        { name: 'Other', value: 10 },
    ];

    return (
        <div>
            <h5>Outcome Sources</h5>
            <PieChart width={400} height={300}>
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

export default PieChartExample2;
