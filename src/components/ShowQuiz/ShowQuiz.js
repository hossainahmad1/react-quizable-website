import React from 'react';
import ShowOption from '../ShowOption/ShowOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowQuiz = ({ data }) => {
    const opstionDatas = data.options
    const { question, correctAnswer } = data

    const optionClick = (optionData) => {
        if (correctAnswer === optionData) {
            // alert('correct answer')
            toast('Correct Answer')
        }
        else {
            // alert('wrong answer')
            toast('Wrong Answer')
        }
    }
    return (
        <div className='w-3/5 mx-auto'>

            <p className=' quiz-color  text-2xl py-7 font-bold color'>Quiz : {question}</p>
            {
                opstionDatas.map(opstionData => <ShowOption
                    opstionData={opstionData}
                    opstionClick={optionClick}
                    key={opstionData.id}
                ></ShowOption>)
            }
        </div >
    );
};

export default ShowQuiz;