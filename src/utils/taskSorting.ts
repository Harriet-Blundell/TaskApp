export const normalizePriority = (taskPriority: string) => {
    const lowerCaseTaskPriority = taskPriority.toLowerCase();
    if (lowerCaseTaskPriority === "high" || lowerCaseTaskPriority === "medium" || lowerCaseTaskPriority === "low") {
        return lowerCaseTaskPriority;
    } else {
        return "unknown"
    }
};

export const normalizeOption = () => {

}