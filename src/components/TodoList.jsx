import { useState } from "react";

const TodoList = ({ addTask, children, clearAll }) => {
  const [text, setText] = useState("");
  const addHanndler = (e, text) => {
    addTask(e, text);
    setText("");
  };
  return (
    <>
      <div className="todo-wrapper">
        <h1>This is toDo App</h1>
        <form onSubmit={(e) => addHanndler(e, text)}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          {children}
        </form>
        <button className="clear-all" onClick={() => clearAll()}>
          Clear All
        </button>
      </div>
      ;
    </>
  );
};

export default TodoList;
