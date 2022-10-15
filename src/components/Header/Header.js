import { AppBar, Toolbar, Typography } from "@mui/material";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      component="header"
      position="static"
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Navigation />
          </Typography>       
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
          
    </AppBar>
  );
};