import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Task({taskProps, toggleComplete}) {
  return (
    <div className='Task'>
        <p 
        onClick={() => toggleComplete(taskProps.id)} 
        className={`${taskProps.completed ? 'completed': ""}`}>
            {taskProps.taskProps}
            </p>
        <div>
            <FaTrash />
            <FaEdit />
        </div>
    </div>
  )
}