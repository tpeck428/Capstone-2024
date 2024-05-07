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
        setTasks([...tasks, {id: uuidv4(), taskProps: taskObject,
        completed: false, isEditing: false}]);
    }

    console.log(tasks);
    //function that allows you to click a task to mark as complete
    //maps through the tasks to find the one with a matching id to mark as complete
    const toggleComplete = id => {
        setTasks(tasks.map(taskObject => taskObject.id === id ? {...taskObject, completed: !taskObject.completed} : taskObject))
    }

    return (
        <div className='TaskWrapper'>
            <h1>What To Do..</h1>
            <TaskForm addTask={addTask} />
            {tasks.map((taskObject, index) => (
                <Task taskProps={taskObject} key={index} 
                toggleComplete={toggleComplete} />
            ))}
            
        </div>
    )
}