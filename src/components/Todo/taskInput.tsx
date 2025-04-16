import { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
    Box,
    IconButton,
    TextField,
    Tooltip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { strings } from "@/constants/strings";

const StyledAddButton = styled(IconButton)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

interface ITaskInputProps {
    isLoading: boolean;
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: () => void;
}

const TaskInput = ({
    isLoading,
    newTask,
    setNewTask,
    handleAddTask
}: ITaskInputProps) => {
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!isLoading) {
            inputRef.current?.focus();
        }
    }, [isLoading]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
        if (error) setError(false);
    }

    const handleAddWithValidation = () => {
        if (newTask.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        handleAddTask();
    };

    return (
        <Box display="flex" alignItems="flex-start" gap={1}>
            <TextField
                label={strings.addNewTask}
                variant="outlined"
                value={newTask}
                onChange={handleInputChange}
                error={error}
                helperText={error ? strings.required : ' '}
                disabled={isLoading}
                aria-label={strings.addNewTask}
                aria-describedby={error ? 'error-text' : undefined}
                inputRef={inputRef}
                fullWidth
            />
            <Tooltip title={strings.add}>
                <span>
                    <StyledAddButton
                        color="primary"
                        onClick={handleAddWithValidation}
                        disabled={isLoading}
                        aria-label={strings.addNewTask}
                    >
                        <Add />
                    </StyledAddButton>
                </span>
            </Tooltip>
            {error && (
                <div id="error-text" className="hidden">
                    {strings.required}
                </div>
            )}
        </Box>
    );
}

export default TaskInput;
