import { TextField, IconButton, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

type TaskInputProps = {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: () => void;
};

const TaskInput = ({ newTask, setNewTask, handleAddTodo }: TaskInputProps) => {
    return (
        <Box display="flex" gap={1} mb={2}>
            <TextField
                label="Add new task"
                variant="outlined"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                fullWidth
            />
            <IconButton color="primary" onClick={handleAddTodo}>
                <Add />
            </IconButton>
        </Box>
    );
};

export default TaskInput;
