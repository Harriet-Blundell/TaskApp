"use client";

import Header from "@/components/Header";
import RootLayout from "./layout";
import ToDoList from "@/components/ToDoList";
import AddToDoItem from "@/components/AddToDoItem";
import { useEffect, useState } from "react";
import { Task } from "@/types";
import { fetchTasks, postTask, updateTask } from "@/utils/api-requests";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data.tasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (newTask: Task) => {
    await postTask(newTask);
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = async (taskId: number) => {
    const task = tasks.find((task) => task.id === taskId);

    if (task) {
      await updateTask(!task.completed, taskId);
      const updatedTasks = tasks.map((t) => {
        return t.id === taskId
          ? {
              ...t,
              completed: !t.completed,
            }
          : t;
      });
      setTasks(updatedTasks);
    }
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
