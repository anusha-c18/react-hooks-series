import React, { useState } from "react";
import "./Form.css";

function Form({ updateAllTasks }) {
  const [task, setTask] = useState("");

  const updateTaskText = (event) => {
    event.preventDefault();
    setTask(event.target.value);
  };

  const updateTasks = (event) => {
    event.preventDefault();
    if (task != "") {
      updateAllTasks(task);
    } else {
      //modal
    }
  };

  return (
    <form className="task-form" onSubmit={updateTasks}>
      <input
        type="text"
        className="task-text"
        name="task-text"
        id="task-text"
        onChange={updateTaskText}
      />
      <button type="submit" className="task-add">
        Add
      </button>
    </form>
  );
}

export default Form;
