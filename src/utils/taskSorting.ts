const PRIORITIES = ["high", "medium", "low"] as const; // types disappear at runtime
type Priority = typeof PRIORITIES[number];

export const normalizePriority = (taskPriority: string) => {
    const lowerCaseTaskPriority = taskPriority.toLowerCase();
    if (PRIORITIES.includes(lowerCaseTaskPriority as Priority)) {
        return lowerCaseTaskPriority;
    } else {
        return "unknown"
    }
};

export const normalizeOption = () => {

}