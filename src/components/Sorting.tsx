import { Task } from "@/types";

export const handleSelectedPriorityOption = (
  tasks: Task[],
  option: string
): Task[] => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };

  const sortedTasks = [...tasks].sort((a, b) => {
    const aPriority =
      priorityOrder[a.priority as keyof typeof priorityOrder] || 999;
    const bPriority =
      priorityOrder[b.priority as keyof typeof priorityOrder] || 999;

    if (option === "High") {
      return aPriority - bPriority;
    } else if (option === "Medium") {
      if (a.priority === "medium") return -1;
      if (b.priority === "medium") return 1;
      return aPriority - bPriority;
    } else if (option === "Low") {
      return bPriority - aPriority;
    }
    return 0;
  });

  return sortedTasks;
};
