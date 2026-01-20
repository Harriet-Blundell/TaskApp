import { Task } from "@/types";
import { useState } from "react";

const AddToDoItem = ({
  handleAddTask,
}: {
  handleAddTask: (task: Task) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.length) return;

    const newTask: Task = {
      id: Date.now(),
      title: inputValue,
      completed: false,
      priority: priority,
      created_at: Date.now().toString(),
    };

    handleAddTask(newTask);
    setInputValue("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  return (
    <form className="my-4 space-y-2" onSubmit={handleSubmit}>
      <div className="flex">
      <input
        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-[12px]"
        placeholder="What do you need to do?"
        onChange={handleOnChange}
        value={inputValue}
      />
      <select
        className="border rounded-xl border-slate-300 text-slate-400 px-3 py-2 ml-2 text-[12px] appearance-none"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
      </div>
      <button
        type="submit"
        className="w-full bg-slate-900 text-white py-2 rounded-xl"
      >
        Add task
      </button>
    </form>
  );
};

export default AddToDoItem;
