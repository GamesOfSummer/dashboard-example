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
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const data = [
        { name: 'Group A', value: 90 },
        { name: 'Group B', value: 8 },
        { name: 'Group C', value: 2 },
    ];

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            // key=index
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PieChartExample;
