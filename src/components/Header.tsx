import { useState } from "react";
import Dropdown from "./Dropdown";
import { Task } from "@/types";

const Header = ({
  numOfTasks = 0,
  numOfCompletedTasks = 0,
  sortOption,
  setSortOption,
}: {
  numOfTasks: number;
  numOfCompletedTasks: number;
  tasks: Task[];
  sortOption: "high" | "medium" | "low" | "";
  setSortOption: (option: "high" | "medium" | "low" | "") => void;
}) => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold p-4 bg-blue-500 text-white rounded-xl my-4">
        To Do List
      </h1>
      <div className="relative">
        <p className="text-sm text-slate-500 text-center">
          {numOfTasks} tasks · {numOfCompletedTasks} completed
        </p>
        {sortOption && (
          <Dropdown
            handleSelectedPriorityOption={setSortOption}
          />
        )}
      </div>
    </>
  );
};

export default Header;
