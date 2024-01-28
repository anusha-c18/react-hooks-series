import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Modal from "./Components/EmptyTaskModal";
import Tasks from "./Components/Tasks";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [allTasks, setAllTasks] = useState({
    ToDo: [],
    Ongoing: [],
    Completed: [],
  });

  console.log(allTasks);

  const toggleModal = () => {
    setModalVisibility((prev) => {
      return !prev;
    });
  };

  const updateAllTasks = (value, identifier) => {
    setAllTasks((prevTasks) => ({
      ...prevTasks,
      [identifier]: [...prevTasks[identifier], value],
    }));
    console.log(allTasks);
  };

  return (
    <>
      {modalVisibility ? <Modal toggleModal={toggleModal} /> : null}
      <Form updateAllTasks={updateAllTasks} toggleModal={toggleModal} />
      <Tasks allTasks={allTasks} />
    </>
  );
}

export default App;
