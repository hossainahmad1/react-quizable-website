import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistic = () => {
    const mark = useLoaderData();
    const data = mark.data;
    console.log(data)
    return (
        <div>
            <LineChart width={500} height={400} data={data} >
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Statistic;