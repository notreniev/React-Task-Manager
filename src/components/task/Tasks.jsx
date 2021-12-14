import React from 'react';
import Task from './Task';

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return (
    <div>
        {tasks.map((task, index) => 
            <Task key={index} 
                task={task} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion} 
            />)}
    </div>
    );
}

export default Tasks;