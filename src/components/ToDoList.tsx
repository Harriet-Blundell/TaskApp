import ToDoItem from "./ToDoItem";
import { Task } from "../types";

const ToDoList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <ul>
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
