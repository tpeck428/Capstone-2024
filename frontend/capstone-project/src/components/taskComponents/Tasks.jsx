import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";


export default function Task() {
  return (
    <div className='Task'>
        <p>Go to Class</p>
        <div>
            <FaTrash />
            <FaEdit />
        </div>
    </div>
  )
}