import { Task } from "../types";

const ToDoItem = ({ task }: { task: Task }) => {
  return (
    <li className="flex items-center justify-between border-b py-3">
      <span id={task.id.toString()}>{task.text}</span>
      <button className="text-slate-400 text-sm">✕</button>
    </li>
  );
};

export default ToDoItem;
