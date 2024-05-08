import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Task({taskProps, toggleComplete, deleteTask, editTask}) {
  return (
    <div className='Task'>
        <p 
        onClick={() => toggleComplete(taskProps.id)} 
        className={`${taskProps.completed ? 'completed': ""}`}>
            {taskProps.taskProps}
            </p>
        <div className='icons'>
            <FaEdit onClick={() => editTask(taskProps.id)} />
            
            <FaTrash onClick={() => deleteTask(taskProps.id)} />
        </div>
    </div>
  )
}