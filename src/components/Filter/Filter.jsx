import { Box, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterReduser } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterReduser(e.currentTarget.value));
  };

  return (
    <Box maxWidth="sm" sx={{ ml: 3, mt: 3 }}>
      <Typography variant="h5" component="p">
        Find contacts by name
      </Typography>
      <TextField
        fullWidth
        id="filter"
        variant="outlined"
        type="text"
        onChange={onChangeFilter}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};
