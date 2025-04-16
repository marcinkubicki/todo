import { useEffect, useState } from 'react';
import { Container, Typography} from '@mui/material';
import { ERROR_MESSAGES, TEXT } from "@/constants/constants.ts";
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export type TTodo = {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
};

const userId = 18;

const ToDoList = () => {
    const [tasks, setTasks] = useState<TTodo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [editedTaskId, setEditedTaskId] = useState<number | null>(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        async function getList() {
            setIsLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(ERROR_MESSAGES.FETCH_LIST_FAILED);
                }

                const data = await response.json();
                const limitedData = data.slice(0, 15);

                setTasks(limitedData);
                setIsLoading(false);
            } catch (error) {
                throw new Error(`${error} - Failed to get list`);
            }
        }

        getList();
    }, []);

    const handleAddTodo = () => {
        if (newTask.trim() === '') return;

        const newItem = {
            id: Date.now() + userId,
            title: newTask,
            completed: false,
            userId: userId,
        };

        setTasks((prev) => [newItem, ...prev]);
        setNewTask('');
    };

    const handleEdit = (id: number, title: string) => {
        setEditedTaskId(id);
        setEditText(title);
    };

    const handleSaveEdit = (id: number) => {
        setTasks((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, title: editText } : todo
            )
        );
        setEditedTaskId(null);
        setEditText('');
    };

    const handleToggle = (id: number) => {
        setTasks((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTasks((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>{TEXT.TITLE}</Typography>

            <TaskInput
                newTask={newTask}
                setNewTask={setNewTask}
                handleAddTodo={handleAddTodo}
            />

            <TaskList
                tasks={tasks}
                isLoading={isLoading}
                editedTaskId={editedTaskId}
                editText={editText}
                setEditedTaskId={setEditedTaskId}
                setEditText={setEditText}
                handleEdit={handleEdit}
                handleSaveEdit={handleSaveEdit}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            />
        </Container>
    );
};

export default ToDoList;
