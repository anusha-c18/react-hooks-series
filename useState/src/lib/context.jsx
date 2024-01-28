import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  return (
    <Context.Provider
      value={{
        setTask,
        allTasks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
