import { useRef } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const ToDo = ({ tasks, delTask, comTask, search, showAll }) => {
  const mark = useRef();
  const complete = useRef();
  const deleteHandler = (i) => {
    delTask(i);
  };
  const copmHandler = (i) => {
    comTask(i);
  };
  console.log(showAll);

  if (showAll == false) {
    return (
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            className={task.isCom ? "todo-complete" : null}
            style={
              task.name.startsWith(search)
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            {task.name}
            <span>
              <i
                onClick={() => {
                  deleteHandler(i);
                }}
                name="trash"
                className="fa fa-trash"
              ></i>

              <i
                onClick={() => copmHandler(i)}
                className="fa fa-check"
                className={task.isCom ? "fa fa-thumbs-up" : "fa fa-check"}
                name={task.isCom ? "complete" : "mark"}
                // style={{ color: "white", margin: "5px" }}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    console.log("done");
    return (
      <ul>
        {tasks.map((task, i) => (
          <li key={i} className={task.isCom ? "todo-complete" : null}>
            {task.name}
            <span>
              <i
                onClick={() => {
                  deleteHandler(i);
                }}
                name="trash"
                className="fa fa-trash"
              ></i>

              <i
                onClick={() => copmHandler(i)}
                className="fa fa-check"
                className={task.isCom ? "fa fa-thumbs-up" : "fa fa-check"}
                name={task.isCom ? "complete" : "mark"}
                // style={{ color: "white", margin: "5px" }}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    );
  }
};

export default ToDo;
