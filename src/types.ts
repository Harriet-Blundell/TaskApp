export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

/*
- Using export type would be overkill for a simple object
- Task defines the shape of a single task object

*/