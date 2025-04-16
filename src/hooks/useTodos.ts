import React, { useState, useEffect, useRef } from "react";
import {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
} from "@/services/todoService.ts";
import { getErrorMessage } from "@/helpers/getErrorMessage";
import { USER_ID } from "@/constants/constants";
import { strings } from "@/constants/strings";
import type { TTask } from "@/types/todo.ts";

interface ITodoHook {
    tasks: TTask[];
    isLoading: boolean;
    error: string;
    successMessage: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (title: string) => Promise<void>;
    handleUpdate: (id: number, updates: Partial<TTask>) => Promise<void>;
    handleDelete: (id: number) => Promise<void>;
}

export const useTodos = (): ITodoHook => {
    const [tasks, setTasks] = useState<TTask[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const tempIdCounter = useRef(-1);

    useEffect(() => {
        async function getList() {
            setIsLoading(true);
            try {
                const todos = await fetchTodos();
                setTasks(todos);
                setSuccessMessage(strings.fetchTasksSuccess);
            } catch (error: unknown) {
                setError(getErrorMessage(error));
            } finally {
                setIsLoading(false);
            }
        }

        getList();
    }, []);

    const handleAdd = async (title: string) => {
        const tempId = tempIdCounter.current--;
        const newTask: TTask = {
            id: tempId,
            title,
            completed: false,
            userId: USER_ID,
        };

        setTasks(prev => [newTask, ...prev]);

        try {
            const added = await addTodo(newTask);
            setTasks(prev => prev.map(task => task.id === tempId ? added : task));
            setSuccessMessage(strings.addTaskSuccess);
        } catch (error: unknown) {
            setTasks(prev => prev.filter(task => task.id !== tempId));
            setError(getErrorMessage(error));
        }
    };

    const handleUpdate = async (id: number, updates: Partial<TTask>) => {
        const prevTask = tasks.find(task => task.id === id);

        if (!prevTask) return;

        setTasks(prev =>
            prev.map(task => task.id === id ? { ...task, ...updates } : task)
        );

        try {
            await updateTodo(id, { ...prevTask, ...updates });
            setSuccessMessage(strings.updateTaskSuccess);
        } catch (error: unknown) {
            setTasks(prev =>
                prev.map(task => task.id === id ? prevTask : task)
            );
            setError(getErrorMessage(error));
        }
    };

    const handleDelete = async (id: number) => {
        const toDelete = tasks.find(task => task.id === id);

        if (!toDelete) return;

        setTasks(prev => prev.filter(task => task.id !== id));

        try {
            await deleteTodo(id);
            setSuccessMessage(strings.deleteTaskSuccess);
        } catch (error: unknown) {
            setTasks(prev => [...prev, toDelete]);
            setError(getErrorMessage(error));
        }
    };

    return {
        tasks,
        isLoading,
        error,
        successMessage,
        setError,
        setSuccessMessage,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
