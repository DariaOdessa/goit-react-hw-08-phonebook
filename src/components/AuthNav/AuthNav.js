import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


export const AuthNav = () => {
    return (
        <Typography variant="h6" component="div" >
            <Button
                component={NavLink}
                to={"/register"}
                variant="contained"
                color="secondary"
                sx={{ mr: 2 }}
                size='large'>
                    Register
            </Button>

            <Button
                component={NavLink}
                to={"/login"}
                variant="contained"
                color="secondary"
                size='large'>
                    Log In
            </Button>
    
        </Typography>
    )
};