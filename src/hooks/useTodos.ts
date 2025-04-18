import React, { useState, useRef } from "react";
import {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
} from "@/services/todoService.ts";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
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
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const tempIdCounter = useRef(-1);

    const queryClient = useQueryClient();

    const {data: tasks = [], isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const todos = await fetchTodos();

                setSuccessMessage(strings.fetchTasksSuccess);
                return todos;
            } catch (error: unknown) {
                setError(getErrorMessage(error));
            }
        }
     })

    const updateTasksLocally = (updater: (prev: TTask[]) => TTask[]) => {
        queryClient.setQueryData<TTask[]>(['tasks'], old => updater(old ?? []));
    };

    const addMutation = useMutation<TTask | undefined, Error, string>({
        mutationFn: async (title: string) => {
            const tempId = tempIdCounter.current--;
            const newTask: TTask = {
                id: tempId,
                title,
                completed: false,
                userId: USER_ID,
            };

            updateTasksLocally(prev => [newTask, ...prev]);

            try {
                const added = await addTodo(newTask);
                setSuccessMessage(strings.addTaskSuccess);

                return added;
            } catch (error: unknown) {
                updateTasksLocally(prev =>
                   prev.filter(task => task.id !== tempId)
                );
                setError(getErrorMessage(error));
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']})
        }
    })

    const handleAdd = async (title: string) => {
        await addMutation.mutateAsync(title);
    };

    const handleUpdate = async (id: number, updates: Partial<TTask>) => {
        const prevTask = tasks.find(task => task.id === id);

        if (!prevTask) return;

        updateTasksLocally(prev =>
           prev.map(task => task.id === id ? { ...task, ...updates } : task)
        );

        try {
            await updateTodo(id, { ...prevTask, ...updates });
            setSuccessMessage(strings.updateTaskSuccess);
        } catch (error: unknown) {
            updateTasksLocally(prev =>
               prev.map(task => task.id === id ? prevTask : task)
            );

            setError(getErrorMessage(error));
        }
    };

    const handleDelete = async (id: number) => {
        const toDelete = tasks.find(task => task.id === id);

        if (!toDelete) return;

        updateTasksLocally(prev =>
           prev.filter(task => task.id !== id)
        );

        try {
            await deleteTodo(id);
            setSuccessMessage(strings.deleteTaskSuccess);
        } catch (error: unknown) {
            updateTasksLocally(prev => [...prev, toDelete]);
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
