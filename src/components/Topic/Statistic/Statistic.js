import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistic = () => {
    const mark = useLoaderData();
    const data = mark.data;
    console.log(data)
    return (
        <div>
            <LineChart width={500} height={400} data={data} margin={{ top: 10, right: 20, bottom: 5, left: 10 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistic;