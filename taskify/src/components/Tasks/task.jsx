import React from "react";
import "./CSS/task.css";
export const Task = () => {
  return (
    <>
      <div className="task">
        <div className="taskData">
          <h1 className="title">Task Title</h1>
          <p>Task Description</p>
        </div>
        <div className="taskSettings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
