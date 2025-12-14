"use client";

import Header from "@/components/Header";
import RootLayout from "./layout";
import ToDoList from "@/components/ToDoList";
import AddToDoItem from "@/components/AddToDoItem";
import { useState } from "react";
import { Task } from "@/types";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete the project",
      completed: false,
    },
    {
      id: 2,
      text: "Review pull requests",
      completed: true,
    },
  ]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="md: p-4">
      <div className="flex flex-col justify-center">
        <Header />
        <AddToDoItem addTask={handleAddTask} />
        <ToDoList tasks={tasks} />
      </div>
    </div>
  );
};

export default function Page() {
  return <RootLayout>{<Home />}</RootLayout>;
}
