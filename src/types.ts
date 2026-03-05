export interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: string;
    created_at: string;
}

export type handleSelectedPriorityOption = (option: "high" | "medium" | "low" | "") => void;