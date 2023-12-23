import React from "react";
import { Columns } from "../Columns/columns";
import { Button } from "../Columns/Button/button";

export const Panel = () => {
  return (
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 mt-14 flex flex-col items-center">
          <Button></Button>
          <Columns></Columns>
        </div>
      </div>
    </div>
  );
};
