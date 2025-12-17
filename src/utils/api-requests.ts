import { Task } from "@/types";

export const fetchTasks = async () => {
    const response = await fetch("https://backend-app-sage.vercel.app/api/tasks");
    const data = await response.json();
    return data;
}

export const postTask = async (body: Task) => {
    const response = await fetch("https://backend-app-sage.vercel.app/api/tasks", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    return response.json();
}

// Add a patch call
// Add a delete call