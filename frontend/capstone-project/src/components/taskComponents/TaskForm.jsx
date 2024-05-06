import React, { useState } from 'react'

export default function TaskForm() {

const [value, setValue] = useState("");

const handleSubmit = ev => {
    ev.preventDefault();
    // console.log(value) / logs to console
}

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
        <input 
        type='text' 
        className='task-input' 
        placeholder='What to do...'
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='task-btn'>
            Add Task
        </button>
    </form>
  )
}