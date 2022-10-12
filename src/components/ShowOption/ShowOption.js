import React from 'react';
import { ToastContainer } from 'react-toastify';
import './ShowOption.css'
const ShowOption = ({ optionData, optionClick }) => {
    console.log(optionData)
    // const { } = opstionData
    return (
        <div>
            <button onClick={() => optionClick(optionData)} className='quiz-details  text-lg hover:bg-slate-700 p-3 hover:text-white rounded border-'>{optionData}
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowOption;