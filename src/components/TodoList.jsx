import { useState } from "react";

const TodoList = ({
  addTask,
  children,
  clearAll,
  searchTask,
  showList,
  showAll,
  // search,
}) => {
  const [text, setText] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const searchHanndler = (e) => {
    e.preventDefault();
    if (searchItem.trim() !== "") {
      searchTask(searchItem);
    }
    setSearchItem("");
  };
  const addHanndler = (e, text) => {
    addTask(e, text);
    setText("");
  };
  const showListHandler = () => {
    showList();
  };
  return (
    <>
      <div className="todo-wrapper">
        <h1 className="title">To Do App</h1>
        <form
          onSubmit={(e) => searchHanndler(e)}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <input
            placeholder="Search..."
            type="text"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              marginLeft: "20px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <i
              className="fa fa-search"
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: "dodgerblue",
              }}
            ></i>
          </button>
        </form>
        {!showAll && (
          <button
            style={{
              color: "dodgerblue",
              backgroundColor: "transparent",
              margin: "5px",
              border: "none",
              padding: "5px",
              marginBottom: "20px",
              borderBottom: "1px solid dodgerblue",
              cursor: "pointer",
            }}
            onClick={() => {
              showListHandler();
            }}
          >
            show All Tasks
          </button>
        )}

        <form onSubmit={(e) => addHanndler(e, text)} style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Add Task Here..."
              style={{ flexGrow: "1" }}
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                marginLeft: "20px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <i
                className="fa fa-plus"
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "dodgerblue",
                }}
              ></i>
            </button>
          </div>

          {children}
        </form>

        <button
          className="clear-all"
          style={{ display: "inline-block" }}
          onClick={() => clearAll()}
        >
          Clear All
        </button>
      </div>
      ;
    </>
  );
};

export default TodoList;
