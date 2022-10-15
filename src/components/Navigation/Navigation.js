import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import { Button, Typography } from "@mui/material";



export const Navigation = () => {
     const { isLoggedIn } = useAuth();
    return (
        <Typography component="nav" >
            <Button
                component={NavLink}
                to={"/"}
                variant="contained"
                color="secondary"
                sx={{ mr: 2 }}
                size='large'
            >
              Home  
           </Button>
            {isLoggedIn && (
                <Button
                component={NavLink}
                    to={"/contacts"}
                    variant="contained"
                    color="secondary"
                    size='large'
            >
              Contacts  
           </Button>
                )}
            
        </Typography>
    );
};