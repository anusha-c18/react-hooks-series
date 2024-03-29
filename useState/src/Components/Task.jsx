import React from "react";
import Arrow from "../assets/arrow.png";
import "./Task.css";

function Task({ tasksSection, taskText, shiftTask }) {
  const shiftLeft = () => {
    shiftTask(-1, tasksSection, taskText);
  };

  const shiftRight = () => {
    shiftTask(1, tasksSection, taskText);
  };

  return (
    <div className="individual-task-container">
      <div className="individual-task">
        <p className="individual-task-text">{taskText}</p>
      </div>
      <div className="shift-task">
        <button
          className={`shift-button shift-button-right ${
            tasksSection === "ToDo" ? "visibility" : ""
          }`}
        >
          <img
            src={Arrow}
            alt="shift left"
            className="shift-left arrow"
            onClick={shiftLeft}
          />
        </button>
        <button
          className={`shift-button shift-button-right ${
            tasksSection === "Completed" ? "visibility" : ""
          }`}
        >
          <img
            src={Arrow}
            alt="shift right"
            className="arrow"
            onClick={shiftRight}
          />
        </button>
      </div>
    </div>
  );
}

export default Task;
