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
  return (
    <div className="flex py-2 my-1 px-2 rounded-xl justify-between text-[10px] hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700">
      <div className="flex w-3/4">
        <button
          className="group w-1/4"
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

        <p className="flex w-3/4 text-left">
          {task.title[0].toUpperCase() + task.title.slice(1)}
        </p>
      </div>

      <div className="flex w-1/4">
        <p className="px-6 my-auto"> {task.priority[0].toUpperCase()}</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleTask(task.id)}
          className="w-5 h-4 ml-auto my-auto"
        />
      </div>
    </div>
  );
};

export default ToDoItem;

// List priority in the to do list
