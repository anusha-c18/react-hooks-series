import React from "react";
import "./Tasks.css";
import Task from "./Task";

function Tasks({ allTasks }) {
  const getColor = (tasksSection) => {
    if (tasksSection === "ToDo") {
      return "#FFA447";
    } else if (tasksSection === "Ongoing") {
      return "#FFFC9B";
    } else {
      return "#B7E5B4";
    }
  };

  return (
    <div className="tasks-container">
      {Object.keys(allTasks).map((tasksSection) => (
        <div
          className="tasks-sections"
          style={{ backgroundColor: getColor(tasksSection) }}
        >
          <p className="tasks-section-heading">{tasksSection}</p>
          {allTasks[tasksSection].map((taskText) => (
            <Task tasksSection={tasksSection} taskText={taskText} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Tasks;
