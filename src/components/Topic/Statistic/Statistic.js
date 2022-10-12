import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistic = () => {
    const mark = useLoaderData();
    const data =mark.data;
    console.log(data)
    return (
        <div>
            <h4>this is a Statistic</h4>
        </div>
    );
};

export default Statistic;