import React, { useState } from "react";
import { TodoColumn } from "../Columns/TodoColumn/todoColumn";
import { InProgressColumn } from "../Columns/InProgressColumn/inProgressColumn";
import { DoneColumn } from "../Columns/DoneColumn/doneColumn";
import { Button } from "../Columns/Button/button";

export const Panel = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="p-4 sm:ml-64 ">
        <div className="p-4 mt-14 flex flex-col items-center ">
          <Button setCount={setCount}></Button>
          <div className="flex flex-row ">
            <TodoColumn count={count}></TodoColumn>
            <InProgressColumn></InProgressColumn>
            <DoneColumn></DoneColumn>
          </div>
        </div>
      </div>
    </div>
  );
};
