import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Grid, TextField, Button} from '@mui/material';
import { Container } from '@mui/system';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
      <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 6,
          padding: 6,
            display: 'flex',
            flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #00695f',
          borderRadius: '5px',
            
          }}>
            <Box
              component='form'
              sx={{  mt: 4 }}  
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                    <TextField autoComplete='off' fullWidth id="email" label="Email" variant="outlined" type="email" name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField autoComplete='off' fullWidth id="password" label="Password" variant="outlined" type="password" name="password" />
                  </Grid> 
                </Grid> 
          
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
                  Log In
                </Button>
            </Box> 
      </Box>
    </Container> 
  );
};


