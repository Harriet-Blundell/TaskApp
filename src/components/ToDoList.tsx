import ToDoItem from "./ToDoItem";
import { Task } from "../types";

const ToDoList = ({
  tasks,
  handleToggleTask,
}: {
  tasks: Task[];
  handleToggleTask: (taskId: number) => void;
}) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
