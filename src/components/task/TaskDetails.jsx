import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import Button from '../button/Button';
import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    
    const handleBackButtonClick = () => {
        history.goBack();
    }
    
    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, facilis! Quidem alias libero, voluptatum itaque modi recusandae doloremque minus expedita deserunt quas atque deleniti temporibus nobis ad laborum animi! Nulla!</p>
            </div>
        </>
    );
}

export default TaskDetails;