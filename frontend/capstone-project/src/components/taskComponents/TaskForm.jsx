import React, { useState } from 'react'

export default function TaskForm({addTask}) {

const [value, setValue] = useState("");

const handleSubmit = ev => {
    ev.preventDefault();
    // console.log(value) / logs to console
    //passes state from form to wrapper
    addTask(value);
}

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <input 
        type='text' 
        className='task-input' 
        placeholder='What to do...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='task-btn'>
            Add Task
        </button>
    </form>
  )
}