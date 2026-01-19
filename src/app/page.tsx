"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import RootLayout from "./layout";
import ToDoList from "@/components/ToDoList";
import AddToDoItem from "@/components/AddToDoItem";
import { useTasks } from "@/utils/useTasks";

const Home = () => {
  const {
    tasks,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
    numOfTasks,
    numOfCompletedTasks,
  } = useTasks();

  const [sortedTasks, setSortedTasks] = useState(tasks);

  const handleSortedTasksChange = (newSortedTasks: any[]) => {
    setSortedTasks(newSortedTasks);
  };

  useEffect(() => {
    setSortedTasks(tasks);
  }, [tasks]);

  return (
    <div className="md: p-4">
      <div className="flex flex-col justify-center">
        <Header
          numOfTasks={numOfTasks}
          numOfCompletedTasks={numOfCompletedTasks}
          tasks={sortedTasks}
          onSortedTasksChange={handleSortedTasksChange}
        />
        <AddToDoItem handleAddTask={handleAddTask} />
        <ToDoList
          tasks={sortedTasks}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default function Page() {
  return <RootLayout>{<Home />}</RootLayout>;
}
