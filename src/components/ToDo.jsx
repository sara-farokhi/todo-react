const ToDo = ({ tasks, delTask, comTask }) => {
  const deleteHandler = (i) => {
    delTask(i);
  };
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
              on
            >
              x
            </i>
            <i onClick={() => comTask(i)}>c</i>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ToDo;
