import { useState } from 'react';
import { Spinner } from 'components/Spinner/Spinner';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';
import { Box, Button, Grid, TextField } from '@mui/material';

export const ContactForm = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    number: '',
  });
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { name, number } = formInput;

  const onFormChange = e => {
    const { name, value } = e.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };

  const handleAddContact = async e => {
    e.preventDefault();
    setFormInput({ name: '', number: '' });
    const newContact = {
      name,
      number,
    };

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already exist in your contacts!`)
      : await createContact(newContact);
  };

  return (
    <Box maxWidth="sm" sx={{ ml: 3, mt: 3 }}>
      <Box component="form" onSubmit={handleAddContact}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <p> Name</p>
            <TextField
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onFormChange}
              fullWidth
              id="name"
              label="name"
              variant="outlined"
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <p>Number</p>
            <TextField
              fullWidth
              id="number"
              label="number"
              variant="outlined"
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onFormChange}
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          disabled={isLoading}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {isLoading && <Spinner />}
          Add contact
        </Button>
      </Box>
    </Box>
  );
};
