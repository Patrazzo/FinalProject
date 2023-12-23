import React from "react";
import "./CSS/columns.css";
import { TodoColumn } from "./TodoColumn/todoColumn";
import { InProgressColumn } from "./InProgressColumn/inProgressColumn";
import { DoneColumn } from "./DoneColumn/doneColumn";
export const Columns = () => {
  return (
    <div className="flex flex-row"> 
      <TodoColumn></TodoColumn>
      <InProgressColumn></InProgressColumn>
      <DoneColumn></DoneColumn>
    </div>
  );
};
