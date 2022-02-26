import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ToDo from "./components/ToDo";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const AllTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(AllTasks);
    }
  }, []);

  const addTask = (e, text) => {
    e.preventDefault();
    // const AllTasks = JSON.parse(localStorage.getItem("tasks"));
    const duplicate = tasks.some(
      (a) => a.name.trim().toUpperCase() === text.trim().toUpperCase()
    );
    if (!duplicate) {
      const newTask = { name: text, isCom: false };
      const updateTask = [...tasks];
      updateTask.push(newTask);
      setTasks(updateTask);
      localStorage.setItem("tasks", JSON.stringify(updateTask));
    } else {
      alert("Duplicated Task!");
    }
  };
  const delTask = (toDelete) => {
    const updateTask = [...tasks];
    updateTask.splice(toDelete, 1);
    setTasks(updateTask);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
  };
  const comTask = (toCom) => {
    const updateTask = [...tasks];
    updateTask[toCom].isCom = !updateTask[toCom].isCom;
    setTasks(updateTask);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
  };
  const clearAll = () => {
    localStorage.setItem("tasks", JSON.stringify([]));
    setTasks([]);
  };

  const searchTask = (searchItem) => {
    setShowAll(false);
    setSearch(searchItem);
  };

  const showList = () => {
    setShowAll(true);
  };

  return (
    <>
      <TodoList
        addTask={addTask}
        clearAll={clearAll}
        searchTask={searchTask}
        showList={showList}
        showAll={showAll}
      >
        <ToDo
          tasks={tasks}
          delTask={delTask}
          comTask={comTask}
          search={search}
          showAll={showAll}
        />
      </TodoList>
    </>
  );
};

export default App;
