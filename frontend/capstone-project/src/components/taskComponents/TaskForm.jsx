import React, { useState } from 'react'

export default function TaskForm() {

const [value, setValue] = useState("");

  return (
    <form className='TaskForm'>
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