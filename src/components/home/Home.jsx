import React, { useEffect, useState } from 'react';
import axios from  'axios';
import AddTask from '../task/AddTask';
import Tasks from '../task/Tasks';
import { v4 as uuid} from 'uuid';

const Home = () => {
    const [tasks, setTasks] = useState(
        [
        //     {
        //     id: '1',
        //     title: 'Estudar programação',
        //     completed: false
        // },
        // {
        //     id: '2',
        //     title: 'Ler livros',
        //     completed: false
        // }
    ]);

    useEffect(() => {
        const fetchTasks = async () => {
            const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            setTasks(data);
        }

        fetchTasks();
    }, []);

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