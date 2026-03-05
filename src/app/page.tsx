"use client";

import { useState } from "react";
import Header from "@/components/Header";
import RootLayout from "./layout";
import ToDoList from "@/components/ToDoList";
import AddToDoItem from "@/components/AddToDoItem";
import { useTasks } from "@/utils/useTasks";
import { getPriorityComparator } from "@/utils/taskSorting";

const Home = () => {
  const {
    tasks,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
    numOfTasks,
    numOfCompletedTasks,
  } = useTasks();

  // 1. Store the selected sort option in state
  const [sortOption, setSortOption] = useState<"high" | "medium" | "low" | "">("");

  // 2. Compute sortedTasks based on tasks and sortOption
  const sortedTasks = sortOption
    ? [...tasks].sort(getPriorityComparator(sortOption))
    : tasks;

  // 3. Pass sortOption and setSortOption to Header
  return (
    <div className="md: p-4 dark:bg-gray-900 min-h-screen dark:text-white">
      <div className="flex flex-col justify-center">
        <Header
          numOfTasks={numOfTasks}
          numOfCompletedTasks={numOfCompletedTasks}
          tasks={sortedTasks}
          sortOption={sortOption}
          setSortOption={setSortOption}
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
