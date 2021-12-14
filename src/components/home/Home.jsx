import React, { useState } from 'react';
import AddTask from '../task/AddTask';
import Tasks from '../task/Tasks';
import { v4 as uuid} from 'uuid';

const Home = () => {
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

    const handleTaskClick = (taskId) => {
        const newTask = tasks.map(task => {
            if (task.id === taskId) return {...task, completed : !task.completed };

            return task;
        });

        setTasks(newTask);
    }

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            title: taskTitle,
            id: uuid(),
            completed: false
        }];

        setTasks(newTask);
    }

    const handleTaskDeletion = (taskId) => {
        const newTask = tasks.filter(task => task.id !== taskId);

        setTasks(newTask);
    }

    return (
        <div>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
            />
        </div>
    );
}

export default Home;