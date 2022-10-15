import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <Typography variant="h6" component="div" sx={{display: 'flex'}}>
            <Typography variant="h5" component="span"
                sx={{ mr: '16px' }}>
                Welcome, {user.name}!
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                type="button"
                size='large'
                onClick={() => dispatch(logOut())}>Log out</Button>
        </Typography>
    )
};