import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="task-form">
      <input
        type="text"
        className="task-text"
        name="task-text"
        id="task-text"
      />
      <button className="task-add">Add</button>
    </div>
  );
}

export default Form;
