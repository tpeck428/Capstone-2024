import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import { v4 as uuidv4 } from 'uuid';
import Task from './Tasks';
import EditTaskForm from './EditTaskForm';
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
    // console.log(tasks);

    //function that allows you to click a task to mark as complete
    //maps through the tasks to find the one with a matching id to mark as complete
    const toggleComplete = id => {
        setTasks(tasks.map(taskObject => taskObject.id === id ? {
            ...taskObject, completed: !taskObject.completed} : taskObject))
    }

    //function for task deletion
    const deleteTask = id => {
        setTasks(tasks.filter(taskObject => taskObject.id !== id))
    }

    //function to display the edit task form 
    // when clicking the edit icon on a created task
    const editTask = id => {
        setTasks(tasks.map(taskObject => taskObject.id === id ? {
            ...taskObject, isEditing: !taskObject.isEditing} : taskObject
        ))
    }

    //function to pass in the edited information on the created object
    const editTaskObject = (taskProps, id) => {
        setTasks(tasks.map(taskObject => taskObject.id === id ? {
            ...taskObject, taskProps, isEditing: !taskObject.isEditing} :
            taskObject
        ))
    }

    return (
        <div className='TaskWrapper'>
            <h1>What To Do..</h1>
            <TaskForm addTask={addTask} />

            {tasks.map((taskObject, index) => (
                taskObject.isEditing ? (
                    <EditTaskForm
                    editTask={editTaskObject}
                    taskProps={taskObject}
                     />
                ) : (
                <Task 
                taskProps={taskObject} 
                key={index} 
                toggleComplete={toggleComplete} 
                deleteTask={deleteTask}
                editTask={editTask}
                />
                )
            ))}
            
        </div>
    )
}