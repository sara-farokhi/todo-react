import { useState } from "react";

const TodoList = ({ addTask, children }) => {
  const [todo, setToDo] = useState([]);

  const taskHandler = (e) => {
    e.preventDefault();
    addTask(todo);
    setToDo("");
  };

  return (
    <div>
      <div className="todo-wrapper">
        <form action="" onSubmit={taskHandler}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setToDo(e.target.value)}
          ></input>
        </form>
        {children}
      </div>
    </div>
  );
};

export default TodoList;
