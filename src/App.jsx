import React, { useState } from 'react';
import './App.css';
import AddTask from './components/task/AddTask';
import Tasks from './components/task/Tasks';
import { v4 as uuid} from 'uuid';

function App(){
    const [tasks, setTasks] = useState(
        [{
            id: '1',
            title: 'Estudar programação',
            completed: false
        },
        {
            id: '2',
            title: 'Ler livros',
            completed: false
        }]);

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            title: taskTitle,
            id: uuid(),
            completed: false
        }];

        setTasks(newTask);
    }

    return (
        <div className="container">
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} />
        </div>
    )
}

export default App;