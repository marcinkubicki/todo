import type { TTask } from "@/types/todo";
import {
    API_URL,
    ITEMS_PER_PAGE,
    ERROR_MESSAGES,
} from "@/constants/constants";

export const fetchTodos = async (): Promise<TTask[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(ERROR_MESSAGES.FETCH_LIST_FAILED);
    const data = await response.json();
    return data.slice(0, ITEMS_PER_PAGE);
};

export const addTodo = async (task: Partial<TTask>, ): Promise<TTask> => {
    const idempotencyKey = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify(task),
    });

    if (!response.ok) throw new Error('Failed to add task');
    return await response.json();
};

export const updateTodo = async (id: number, updatedData: Partial<TTask>): Promise<TTask> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error(ERROR_MESSAGES.ADD_ITEM_FAILED);
    return await response.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(ERROR_MESSAGES.DELETE_ITEM_FAILED);
};
