import React, { useState } from "react";
import "./Form.css";

function Form({ updateAllTasks, toggleModal }) {
  const [task, setTask] = useState("");

  const updateTaskText = (event) => {
    event.preventDefault();
    setTask(event.target.value);
  };

  const updateTasks = (event) => {
    event.preventDefault();
    if (task != "") {
      updateAllTasks(task, "ToDo");
      setTask("");
    } else {
      toggleModal();
    }
  };

  return (
    <form className="task-form" onSubmit={updateTasks}>
      <input
        type="text"
        className="task-text"
        value={task}
        onChange={updateTaskText}
        placeholder="Enter Task Description"
      />
      <button type="submit" className="task-add">
        Add
      </button>
    </form>
  );
}

export default Form;
