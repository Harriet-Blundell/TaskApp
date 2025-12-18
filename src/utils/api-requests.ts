import { Task } from "@/types";

const baseURL = "https://backend-app-sage.vercel.app/api/tasks";

export const fetchTasks = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
}

export const postTask = async (body: Task) => {
    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return response.json();
}

export const updateTask = async (completed: boolean, taskId: number) => {
    const response = await fetch(`${baseURL}/${taskId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed })
    })

    return response.json();
}

// Add a delete call