import PropTypes from 'prop-types';
import React from 'react';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Spinner } from 'components/Spinner/Spinner';
import Avatar from 'react-avatar';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  IconButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <ListItemAvatar>
        <Avatar round={true} size={40} name={name} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="h4"
              color="text.primary"
            >
              {name}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline', ml: 2 }}
              component="span"
              variant="h6"
              color="text.primary"
            >
              {number}
            </Typography>
          </React.Fragment>
        }
      />
      <IconButton
        variant="contained"
        aria-label="delete"
        size="large"
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        <DeleteIcon fontSize="inherit" />
        {isDeleting && <Spinner />}
      </IconButton>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
