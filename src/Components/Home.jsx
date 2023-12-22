import React, { useState } from 'react';
import '../styles/Home.css';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Home = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleText = (e) => {
        setTask(e.target.value);
    };


    const handleTask = () => {
        if (task === '') {
            alert('Please enter any task!');
        } else {
            const currentTime = new Date();
            const taskWithTime = {
                text: task,
                time: currentTime.toLocaleString()
            };

            setTasks([...tasks, taskWithTime]);
            setTask('');
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className='home-component'>
            <div className='home-main'>
                <div className='input-div'>
                    <input type='text' placeholder='Enter your task' onChange={handleText} value={task} />
                    <button onClick={handleTask}>Add</button>
                </div>

                <div className='tasks-div'>
                    {tasks.map((taskItem, index) => (
                        <div key={index} className='task'>
                            <h3>{taskItem.text}</h3>
                            <p>{taskItem.time}</p>
                            <div className='task-right'>
                                <FaRegEdit cursor={'pointer'} />
                                <MdDelete cursor={'pointer'} onClick={() => handleDelete(index)} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <h1>THIS SITE IS UNDER CONSTRUCTION</h1>
        </div>
    );
};

export default Home;
