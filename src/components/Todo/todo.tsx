import { useState } from "react";
import {
    Alert,
    Collapse,
    Container,
    Paper,
    Snackbar,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTodos } from "@/hooks/useTodos";
import { TTask } from "@/types/todo";
import { strings } from "@/constants/strings";
import { ITEMS_PER_PAGE } from "@/constants/constants";
import ListSkeleton from "./../ui/listSkeleton";
import TaskInput from "./taskInput";
import TaskList from "./taskList";

const StyledAlert = styled(Alert)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
}));

const Todo = () => {
    const [newTask, setNewTask] = useState('');
    const [editedTaskId, setEditedTaskId] = useState<number | null>(null);
    const [editText, setEditText] = useState('');

    const {
        tasks,
        isLoading,
        error,
        successMessage,
        setError,
        setSuccessMessage,
        handleAdd,
        handleUpdate,
        handleDelete
    } = useTodos();

    const handleAddTask = async () => {
        if (newTask.trim()) {
            await handleAdd(newTask);
            setNewTask('');
        }
    };

    const handleSaveEdit = async (task: TTask) => {
        if (!editText.trim()) return;

        await handleUpdate(task.id, { title: editText });
        setEditedTaskId(null);
        setEditText('');
    };

    const handleToggle = async (task: TTask) => {
        await handleUpdate(task.id, { completed: !task.completed });
    };

    const handleCancel = () => {
        setEditedTaskId(null);
        setEditText('');
    }
    const handleEdit = (id: number, title: string) => {
        setEditedTaskId(id);
        setEditText(title);
    }

    return (
        <Container maxWidth="md" >
            <StyledPaper elevation={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {strings.todoList}
                </Typography>

                <Collapse in={!!error}>
                    {error && (
                        <StyledAlert severity="error" onClose={() => setError('')}>
                            {error}
                        </StyledAlert>
                    )}
                </Collapse>

                <Snackbar
                    open={!!successMessage}
                    autoHideDuration={4000}
                    onClose={() => setSuccessMessage('')}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setSuccessMessage('')}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        {successMessage}
                    </Alert>
                </Snackbar>

                <TaskInput
                    newTask={newTask}
                    setNewTask={setNewTask}
                    handleAddTask={handleAddTask}
                    isLoading={isLoading}
                />

                {isLoading ? (
                    <ListSkeleton count={ITEMS_PER_PAGE} />
                ) : (
                    <TaskList
                        tasks={tasks}
                        editedTaskId={editedTaskId}
                        editText={editText}
                        setEditedTaskId={setEditedTaskId}
                        setEditText={setEditText}
                        handleCancel={handleCancel}
                        handleEdit={handleEdit}
                        handleSaveEdit={handleSaveEdit}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                )}
            </StyledPaper>
        </Container>
    );
};

export default Todo;
