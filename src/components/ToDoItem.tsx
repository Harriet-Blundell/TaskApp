import { Task } from "../types";

const ToDoItem = ({
  task,
  handleToggleTask,
  handleDeleteTask,
}: {
  task: Task;
  handleToggleTask: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
}) => {
  const title = task.title.replace(/^./, (c) => c.toUpperCase()); // capitalise the first letter and leave the rest untouched
  const priority = task.priority.replace(/^./, (c) => c.toUpperCase());

  return (
    <div className="flex py-2 my-1 px-2 rounded-xl justify-between text-[10px] hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700  sm:text-sm">
      <div className="flex w-3/4">
        <button
          className="group w-16 pr-5"
          onClick={() => handleDeleteTask(task.id)}
        >
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/material-outlined/24/FA5252/cancel--v1.png"
            alt="delete"
            className="cursor-pointer block group-hover:hidden"
          />
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/material-rounded/24/FA5252/cancel--v1.png"
            alt="delete hover"
            className="hidden group-hover:block"
          />
        </button>

        <p className="flex w-3/4 text-left">{title}</p>
      </div>

      <div className="flex w-1/4">
        <p className=" ml-auto my-auto"></p>
        <span className="inline sm:hidden">
          {task.priority[0].toUpperCase()}
        </span>
        <span className="hidden sm:inline"> {priority}</span>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleTask(task.id)}
          className="w-8 h-4 ml-auto my-auto sm:mr-2"
        />
      </div>
    </div>
  );
};

export default ToDoItem;

// List priority in the to do list
