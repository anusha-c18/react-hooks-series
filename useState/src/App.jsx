import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Modal from "./Components/EmptyTaskModal";
import Tasks from "./Components/Tasks";
import Layout from "./Components/Layout.jsx";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [allTasks, setAllTasks] = useState({
    ToDo: [],
    Ongoing: [],
    Completed: [],
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
  };

  const shiftTask = (direction, tasksSection, taskText) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = JSON.parse(JSON.stringify(prevTasks));
      updatedTasks[tasksSection] = updatedTasks[tasksSection].filter(
        (task) => task !== taskText
      );
      if (tasksSection == "ToDo") {
        updatedTasks.Ongoing = [...updatedTasks.Ongoing, taskText];
      } else if (tasksSection == "Completed") {
        updatedTasks.Ongoing = [...updatedTasks.Ongoing, taskText];
      } else {
        if (direction == 1) {
          updatedTasks.Completed = [...updatedTasks.Completed, taskText];
        } else {
          updatedTasks.ToDo = [...updatedTasks.ToDo, taskText];
        }
      }
      return updatedTasks;
    });
  };

  return (
    <Layout>
      {modalVisibility ? <Modal toggleModal={toggleModal} /> : null}
      <Form updateAllTasks={updateAllTasks} toggleModal={toggleModal} />
      <Tasks allTasks={allTasks} shiftTask={shiftTask} />
    </Layout>
  );
}

export default App;
