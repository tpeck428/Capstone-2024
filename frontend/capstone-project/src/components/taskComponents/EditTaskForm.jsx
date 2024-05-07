import React, { useState } from 'react'

export default function EditTaskForm({editTask, taskProps}) {

const [value, setValue] = useState(taskProps.taskProps);

const handleSubmit = ev => {
    ev.preventDefault();
    
    editTask(value, taskProps.id);

    setValue("")
}

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <input 
        type='text' 
        className='task-input' 
        placeholder='Update Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='task-btn'>
            Update Task
        </button>
    </form>
  )
}