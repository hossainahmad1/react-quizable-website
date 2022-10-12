import React from 'react';
import { ToastContainer } from 'react-toastify';
import './ShowOption.css'
const ShowOption = ({ opstionData, optionClick }) => {
    console.log(opstionData)
    // const { } = opstionData
    return (
        <div>
            <button onClick={() => optionClick(opstionData)} className='quiz-details  text-lg hover:bg-slate-700 p-3 hover:text-white rounded border-'>{opstionData}
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowOption;