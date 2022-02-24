import { useState } from "react";
import TodoList from "./components/TodoList";
import ToDo from "./components/ToDo";
import "./App.css";

const App = () => {
  const [toDo, setTodos] = useState([]);

  const addTask = (todo) => {
    const newTask = { taskname: todo, isComp: false };
    const newTodo = [...toDo];
    newTodo.unshift(newTask);
    setTodos(newTodo);
  };

  const delTask = (i) => {
    const updatedTask = [...toDo];
    updatedTask.splice(i, 1);
    setTodos(updatedTask);
  };

  const comTask = (i) => {
    const compTask = [...toDo];
    compTask[i].isComp = !compTask[i].isComp;
    setTodos(compTask);
  };

  return (
    <div>
      <TodoList addTask={addTask}>
        <ToDo taskArray={toDo} delTask={delTask} comTask={comTask} />
      </TodoList>
    </div>
  );
};

export default App;
