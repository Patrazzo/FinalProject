import React from "react";
import "./CSS/todoColumn.css";
import { Task } from "../../Tasks/task";

export const TodoColumn = ({ count }) => {
  
  const taskArray = Array.from({ length: count }, (_, index) => index);

  return (
    <div className="todoColumn select-none">
      <div className="name">
        <h4>TODO</h4>
      </div>
      <div className="tasks">
        <Task></Task>
        {taskArray.map((index) => (
          <Task key={index} />
        ))}
      </div>
    </div>
  );
};

