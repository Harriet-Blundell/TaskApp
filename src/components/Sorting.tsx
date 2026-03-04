import { Task } from "@/types";
import { getPriorityComparator } from "@/utils/taskSorting";

export const handleSelectedPriorityOption = (
  tasks: Task[],
  option: "high" | "medium" | "low"
): Task[] => {
  const sortedTasks = [...tasks].sort(getPriorityComparator(option));

  return sortedTasks;
};


