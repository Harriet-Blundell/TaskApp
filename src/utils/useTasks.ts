import { Task } from "@/types";
import { useEffect, useState } from "react";
import { deleteTask, fetchTasks, postTask, updateTask } from "./api-requests";
import { handleSelectedPriorityOption } from "@/components/Sorting";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [sortBy, setSortBy] = useState<string>("");

    

    useEffect(() => {
        const loadTasks = async () => {
            const data = await fetchTasks();
            setTasks(data.tasks);
        };
        loadTasks();
    }, []);

    const handleSortByPriority = (option: string) => {
        setSortBy(option);
        const sortedTasks = handleSelectedPriorityOption(tasks, option);
        setTasks(sortedTasks);
    };

    const handleAddTask = async (newTask: Task) => {
        await postTask(newTask);
        setTasks([...tasks, newTask]);
    };

    const handleToggleTask = async (taskId: number) => {
        const task = tasks.find((task) => task.id === taskId);

        if (task) {
            const updatedTasks = tasks.map((t) => {
                return t.id === taskId
                    ? {
                        ...t,
                        completed: !t.completed,
                    }
                    : t;
            });
            setTasks(updatedTasks);
            await updateTask(!task.completed, taskId);
        }
    };

    const handleDeleteTask = async (taskId: number) => {
        await deleteTask(taskId);
        const deletedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(deletedTasks);
    };

    const completedTasks = tasks?.filter((task) => {
        return task.completed;
    });

    const numOfTasks = tasks?.length;
    const numOfCompletedTasks = completedTasks?.length;

    return {
        tasks,
        handleAddTask,
        handleToggleTask,
        handleDeleteTask,
        handleSortByPriority,
        numOfTasks,
        numOfCompletedTasks
    };
}