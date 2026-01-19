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
    <div className="flex justify-between py-2 px-2 rounded-xl">
      <div className="flex">
        <button
          className="group w-20"
          onClick={() => handleDeleteTask(task.id)}
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-outlined/24/FA5252/cancel--v1.png"
            alt="delete"
            className="cursor-pointer block group-hover:hidden"
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/24/FA5252/cancel--v1.png"
            alt="delete hover"
            className="hidden group-hover:block"
          />
        </button>

        <span className="pl-[5vw]">
          {task.title[0].toUpperCase() + task.title.slice(1)}
        </span>
      </div>

      <div className="flex justify-between">
        <p className="w-35 text-left"> {task.priority}</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleTask(task.id)}
          className="w-25 w-4 h-4 "
        />
      </div>
    </div>
  );
};

export default ToDoItem;

// List priority in the to do list
