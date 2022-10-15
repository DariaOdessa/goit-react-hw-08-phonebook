// import { Box } from '../components/Box';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ConactForm/ContactForm';
// import { Phonebook } from '../components/App.styled';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { Spinner } from '../components/Spinner/Spinner';
import { Typography } from '@mui/material';

export default function Contacts() {
    const { data: contacts, isFetching } = useFetchContactsQuery();

    return (        
    
    <div>
      <Typography variant='h3' sx={{m: 3}}>Phonebook</Typography>
      <ContactForm />
      <Typography variant='h3' sx={{m: 3}}>Contacts</Typography>
      {isFetching && <Spinner />}
      {contacts?.length > 0 ? (
        <Filter />
      ) : (
                    <Typography variant='h3' sx={{ m: 3 }}>
          There are no contacts in your phonebook!
        </Typography>
      )}
      {contacts?.length > 0 && <ContactList />}

    </div>
  );

}