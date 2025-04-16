import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Skeleton,
} from "@mui/material";

interface ISkeleton {
    count?: number;
}

const ListSkeleton = ({ count = 5 }: ISkeleton) => (
    <List>
        {Array.from({ length: count }).map((_, index) => (
            <ListItem key={`${index}-${count}`} divider>
                <ListItemIcon>
                    <Skeleton variant="circular" width={24} height={24} />
                </ListItemIcon>
                <ListItemText
                    primary={<Skeleton variant="text" width="80%" />}
                />
            </ListItem>
        ))}
    </List>
);

export default ListSkeleton;
