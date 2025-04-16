import { Skeleton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface ISkeleton {
    count?: number;
}

const Skeleton = ({ count = 5 }: ISkeleton) => (
    <List>
        {Array.from({ length: count }).map((_, idx) => (
            <ListItem key={idx} divider>
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

export default Skeleton;
