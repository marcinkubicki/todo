import React, { useEffect, useRef} from "react";
import {
    Box,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    Close,
    Delete,
    Edit,
    Save,
} from "@mui/icons-material";
import type { TTask } from "@/types/todo";
import { strings } from "@/constants/strings";

const StyledBox = styled(Box)(({ theme }) => ({
    flex: 1,
    paddingRight: theme.spacing(4),
}));

interface ITaskListProps {
    tasks: TTask[];
    editedTaskId: number | null;
    editText: string;
    setEditedTaskId: React.Dispatch<React.SetStateAction<number | null>>;
    setEditText: React.Dispatch<React.SetStateAction<string>>;
    handleEdit: (id: number, title: string) => void;
    handleCancel: () => void;
    handleSaveEdit: (item: TTask) => void;
    handleToggle: (item: TTask) => void;
    handleDelete: (id: number) => void;
}

const TaskList = ({
    tasks,
    editedTaskId,
    editText,
    setEditText,
    handleEdit,
    handleCancel,
    handleSaveEdit,
    handleToggle,
    handleDelete,
}: ITaskListProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (editedTaskId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editedTaskId]);

    return (
       <List>
           {tasks.map((todo) => (
              <ListItem
                 key={todo.id}
                 divider
                 secondaryAction={
                     editedTaskId === todo.id ? (
                        <Box display="flex" gap={1}>
                            <Tooltip title={strings.save}>
                                <IconButton
                                   edge="end"
                                   onClick={() => handleSaveEdit(todo)}
                                   aria-label={strings.save}
                                >
                                    <Save />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={strings.cancel}>
                                <IconButton
                                   edge="end"
                                   onClick={() => handleCancel()}
                                   aria-label={strings.cancel}
                                >
                                    <Close />
                                </IconButton>
                            </Tooltip>
                        </Box>
                     ) : (
                        <Box display="flex" gap={1}>
                            <Tooltip title={strings.edit}>
                                <IconButton
                                   edge="end"
                                   onClick={() => handleEdit(todo.id, todo.title)}
                                   aria-label={strings.edit}
                                >
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={strings.delete}>
                                <IconButton
                                   edge="end"
                                   onClick={() => handleDelete(todo.id)}
                                   aria-label={strings.delete}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </Box>
                     )
                 }
              >
                  <ListItemIcon>
                      <Checkbox
                         edge="start"
                         checked={todo.completed}
                         onChange={() => handleToggle(todo)}
                         aria-checked={todo.completed ? "true" : "false"}
                         aria-labelledby={`checkbox-${todo.id}`}
                      />
                  </ListItemIcon>
                  {editedTaskId === todo.id ? (
                     <StyledBox>
                         <TextField
                            value={editText}
                            onChange={(event) => setEditText(event.target.value)}
                            size="small"
                            aria-label={strings.edit}
                            inputRef={inputRef}
                            fullWidth
                         />
                     </StyledBox>
                  ) : (
                     <ListItemText primary={todo.title} />
                  )}
              </ListItem>
           ))}
       </List>
    );
}

export default React.memo(TaskList);
