import React from 'react';
import { ToastContainer } from 'react-toastify';

const ShowOption = ({ opstionData, optionClick }) => {
    console.log(opstionData)
    // const { } = opstionData
    return (
        <div>
            <p onClick={() => optionClick(opstionData)} className='  text-lg hover:bg-slate-700 p-3 hover:text-white rounded'>{opstionData}
            </p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowOption;