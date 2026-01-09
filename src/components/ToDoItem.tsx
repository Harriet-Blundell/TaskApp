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
    <div className="flex items-center justify-between mb-5">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleTask(task.id)}
        className="w-4 h-4"
      />
      <p>Priority: {task.priority}</p>
      <span className="text-left">{task.title}</span>
      <button className="group" onClick={() => handleDeleteTask(task.id)}>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/FA5252/cancel--v1.png"
          alt="delete"
          className="cursor-pointer block group-hover:hidden"
        />
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-rounded/24/FA5252/cancel--v1.png"
          alt="delete hover"
          className="hidden group-hover:block"
        />
      </button>
    </div>
  );
};

export default ToDoItem;

// List priority in the to do list
