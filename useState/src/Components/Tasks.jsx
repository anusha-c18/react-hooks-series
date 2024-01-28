import React from "react";
import "./Tasks.css";
import Task from "./Task";

function Tasks({ allTasks, shiftTask }) {
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
      {Object.keys(allTasks).map((tasksSection, index) => (
        <div
          key={index + tasksSection}
          className="tasks-sections"
          style={{ backgroundColor: getColor(tasksSection) }}
        >
          <p className="tasks-section-heading">{tasksSection}</p>
          {allTasks[tasksSection].map((taskText, key) => (
            <Task
              key={key + taskText}
              tasksSection={tasksSection}
              taskText={taskText}
              shiftTask={shiftTask}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Tasks;
