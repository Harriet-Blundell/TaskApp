import { Task } from "@/types";

const PRIORITIES = ["high", "medium", "low"] as const; // types disappear at runtime
type Priority = (typeof PRIORITIES)[number];

export const normalizePriority = (taskPriority: string) => {
  const lowerCaseTaskPriority = taskPriority.toLowerCase();
  if (PRIORITIES.includes(lowerCaseTaskPriority as Priority)) {
    return lowerCaseTaskPriority;
  } else {
    return "unknown";
  }
};

// This function returns a comparator function that can be used to sort tasks based on the selected priority option.
// The comparator function compares two tasks and determines their order based on the priority option selected by the user.
export const getPriorityComparator = (option: Priority) => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  const normalizedOption = normalizePriority(option);

  return (a: Task, b: Task) => {
    const aPriority = priorityOrder[a.priority as Priority] || 999;
    const bPriority = priorityOrder[b.priority as Priority] || 999;

    if (normalizedOption === "high") {
      return aPriority - bPriority;
    } else if (normalizedOption === "medium") {
      return aPriority - bPriority;
    } else if (normalizedOption === "low") {
      return bPriority - aPriority;
    }
    return 0;
  };
};
