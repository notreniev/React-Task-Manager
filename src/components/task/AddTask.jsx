import React, { useState } from 'react';
import './AddTask.css';
import Button from '../button/Button';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
    }

    return (    
    <div className="add-task-container">
        <input className="add-task-input" type="text" onChange={handleInputChange} value={inputData}/>
        <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
    );
}

export default AddTask;