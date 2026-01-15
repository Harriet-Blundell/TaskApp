export interface Task {
    id: number;
    title: string;
    completed: boolean;
    priority: string;
    created_at: string;
}

export type handleSelectedPriorityOption = (tasks:Task[], option: string) => void;