import React, { useState } from "react";
import "./App.css";
import Form from "../src/Components/Form";

function App() {
  const [allTasks, setAllTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  const updateAllTasks = (value, identifier) => {
    setAllTasks((prevTasks) => ({
      ...prevTasks,
      [identifier]: [...prevTasks[identifier], value],
    }));
    console.log(allTasks);
  };

  return (
    <>
      <Form updateAllTasks={updateAllTasks} />
    </>
  );
}

export default App;
