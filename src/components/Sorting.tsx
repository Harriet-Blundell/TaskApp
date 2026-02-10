import { Task } from "@/types";

export const handleSelectedPriorityOption = (
  tasks: Task[],
  option: string
): Task[] => {
  const priorityOrder = { high: 1, medium: 2, low: 3 }; // assigning a numeric weight to each priority

  const sortedTasks = [...tasks].sort((a, b) => {
    // spread (copy) to avoid mutating the original array

    const highPriority =
      priorityOrder[a.priority as keyof typeof priorityOrder] || 999;
    // default to 999 if priority is undefined, so it is put at the end of the list
    // a.priority as keyof typeof priorityOrder tells TypeScript that a.priority is one of the keys in priorityOrder

    const lowPriority =
      priorityOrder[b.priority as keyof typeof priorityOrder] || 999;

    if (option === "High") {
      return highPriority - lowPriority;
      // sort from high to low

    } else if (option === "Medium") {
      const aIsMedium = a.priority.toLowerCase() === "medium";
      const bIsMedium = b.priority.toLowerCase() === "medium";
      
      if (aIsMedium && !bIsMedium) return -1;
      if (!aIsMedium && bIsMedium) return 1;
      return highPriority - lowPriority;
      // sort medium first, then high to low

    } else if (option === "Low") {
      return lowPriority - highPriority;
      // sort from low to high

    }
    return 0;
  });

  return sortedTasks;
};


