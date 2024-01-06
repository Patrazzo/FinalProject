import React from 'react'
import './CSS/doneColumn.css'
import { Task } from '../../Tasks/task'
export const DoneColumn = () => {
  return (
    <div className="doneColumn select-none">
      <div className="name">
        <h4>DONE</h4>
      </div>
      <div className="tasks">
        <Task></Task>
        
      </div>
    </div>
  )
}