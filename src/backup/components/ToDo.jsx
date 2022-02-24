const ToDo = ({ taskArray, delTask, comTask }) => {
  const delHandeler = (i) => {
    delTask(i);
  };

  const completeHandler = (i) => {
    comTask(i);
  };

  return (
    <ul className="todo-complete">
      {taskArray.map((task, i) => (
        <li className={task.isComp ? "todo-complete" : null}>
          {task.taskname}
          <i>
            <span
              onClick={(e) => {
                delHandeler(i);
              }}
            >
              x
            </span>
            <span
              onClick={() => {
                completeHandler(i);
              }}
            >
              c
            </span>
          </i>
        </li>
      ))}
    </ul>
  );
};

export default ToDo;
