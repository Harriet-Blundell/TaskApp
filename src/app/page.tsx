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

  const handleToggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      console.log(task.id, taskId);
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => {
    return task.completed;
  });

  const numOfTasks = tasks.length;
  const numOfCompletedTasks = completedTasks.length;

  return (
    <div className="md: p-4">
      <div className="flex flex-col justify-center">
        <Header
          numOfTasks={numOfTasks}
          numOfCompletedTasks={numOfCompletedTasks}
        />
        <AddToDoItem addTask={handleAddTask} />
        <ToDoList tasks={tasks} handleToggleTask={handleToggleTask} />
      </div>
    </div>
  );
};

export default function Page() {
  return <RootLayout>{<Home />}</RootLayout>;
}
