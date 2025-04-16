import { List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton, Paper, CircularProgress, TextField } from '@mui/material';
import { Edit, Save, Delete } from '@mui/icons-material';
import {TTodo} from './ToDoList.tsx';


type TaskListProps = {
    tasks: TTodo[];
    isLoading: boolean;
    editedTaskId: number | null;
    editText: string;
    setEditedTaskId: React.Dispatch<React.SetStateAction<number | null>>;
    setEditText: React.Dispatch<React.SetStateAction<string>>;
    handleEdit: (id: number, title: string) => void;
    handleSaveEdit: (id: number) => void;
    handleToggle: (id: number) => void;
    handleDelete: (id: number) => void;
};

const TaskList = ({
    tasks,
    isLoading,
    editedTaskId,
    editText,
    setEditText,
    handleEdit,
    handleSaveEdit,
    handleToggle,
    handleDelete,
}: TaskListProps) => {
    return (
        isLoading ? (
            <CircularProgress />
        ) : (
            <Paper elevation={3}>
                <List>
                    {tasks.map((todo) => (
                        <ListItem
                            key={todo.id}
                            divider
                            secondaryAction={
                                editedTaskId === todo.id ? (
                                    <IconButton edge="end" onClick={() => handleSaveEdit(todo.id)}>
                                        <Save />
                                    </IconButton>
                                ) : (
                                    <>
                                        <IconButton edge="end" onClick={() => handleEdit(todo.id, todo.title)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" onClick={() => handleDelete(todo.id)}>
                                            <Delete />
                                        </IconButton>
                                    </>
                                )
                            }
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    onChange={() => handleToggle(todo.id)}
                                />
                            </ListItemIcon>
                            {editedTaskId === todo.id ? (
                                <TextField
                                    value={editText}
                                    onChange={(event) => setEditText(event.target.value)}
                                    size="small"
                                    fullWidth
                                />
                            ) : (
                                <ListItemText primary={todo.title} />
                            )}
                        </ListItem>
                    ))}
                </List>
            </Paper>
        )
    );
};

export default TaskList;
