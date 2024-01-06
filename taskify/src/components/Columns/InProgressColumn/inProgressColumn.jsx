import React from "react";
import "./CSS/inProgressColumn.css";

import { Task } from "../../Tasks/task";

export const InProgressColumn = () => {
  return (
    <div className="inprogressColumn select-none">
      <div className="name">
        <h4>IN PROGRESS</h4>
      </div>
      <div className="tasks">
        <Task></Task>
      </div>
    </div>
  );
};
