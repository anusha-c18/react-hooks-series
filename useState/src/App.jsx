import React, { useState } from "react";
import "./App.css";
import Form from "../src/Components/Form";
import Modal from "../src/Components/EmptyTaskModal";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [allTasks, setAllTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

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
    </>
  );
}

export default App;
