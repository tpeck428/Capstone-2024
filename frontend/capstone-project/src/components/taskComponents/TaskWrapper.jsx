import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import { v4 as uuidv4 } from 'uuid';
import Task from './Tasks';
uuidv4();

export default function TaskWrapper() {
//allows other elements to access value use state set in task form component
    const [tasks, setTasks] = useState([]);

    const addTask = taskObject => {
        //makes copy of current state with spread operator
        //adds id and task being passed in
        setTasks([...tasks, {id: uuidv4(), todo: taskObject,
        completed: false, isEditing: false}]);
        
        console.log(tasks);
    }

    return (
        <div className='TaskWrapper'>
            <TaskForm addTask={addTask} />
            <Task />
        </div>
    )
}