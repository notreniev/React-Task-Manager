import React from 'react';
import Task from './Task';

const Tasks = ({tasks}) => {
    return (
    <div>
            {tasks.map((task, index) => <Task key={index} task={task} />)}
        </div>
    );
}

export default Tasks;