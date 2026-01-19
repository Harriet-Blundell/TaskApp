import ToDoItem from "./ToDoItem";
import { Task } from "../types";

const ToDoList = ({
  tasks,
  handleToggleTask,
  handleDeleteTask,
}: {
  tasks: Task[];
  handleToggleTask: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
}) => {
  return (
    <div className="flex flex-col">
      
      {tasks?.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default ToDoList;
