import React from "react";
import "./CSS/button.css";

export const Button = ({ setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button className="addTask select-none" onClick={handleClick}>
      <h1>ADD NEW TASK</h1>
    </button>
  );
};
