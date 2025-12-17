"use client";

import Header from "@/components/Header";
import RootLayout from "./layout";
import ToDoList from "@/components/ToDoList";
import AddToDoItem from "@/components/AddToDoItem";
import { useEffect, useState } from "react";
import { Task } from "@/types";
import { fetchTasks, postTask } from "@/utils/api-requests";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data.tasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = (newTask: Task) => {
    postTask(newTask);
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // const handleDeleteTask = (taskId: number) => {
  //   const deletedTasks = tasks.filter((task) => task.id !== taskId);
  //   setTasks(deletedTasks);
  // };

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
        <AddToDoItem handleAddTask={handleAddTask} />
        <ToDoList tasks={tasks} handleToggleTask={handleToggleTask} />
      </div>
    </div>
  );
};

export default function Page() {
  return <RootLayout>{<Home />}</RootLayout>;
}
