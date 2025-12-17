import { Task } from "../types";

const ToDoItem = ({
  task,
  handleToggleTask,
}: {
  task: Task;
  handleToggleTask: (taskId: number) => void;
}) => {
  return (
    <div className="flex justify-evenly border-b py-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleTask(task.id)}
      />
      <span className="ml-2">{task.title}</span>
      <button className="text-slate-400 text-sm">✕</button>
    </div>
  );
};

export default ToDoItem;
