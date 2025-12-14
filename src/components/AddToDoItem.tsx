import { Task } from "@/types";
import { useState } from "react";

const AddToDoItem = ({ addTask }: { addTask: (task: Task) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.length) return;

    const newTask: Task = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    addTask(newTask);
    setInputValue("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="my-4 space-y-2" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-xl border border-slate-300 px-3 py-2"
        placeholder="What do you need to do?"
        onChange={handleOnChange}
        value={inputValue}
      />
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
