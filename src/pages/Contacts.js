// import { Box } from '../components/Box';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ConactForm/ContactForm';
// import { Phonebook } from '../components/App.styled';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { Spinner } from '../components/Spinner/Spinner';
import { Box, Typography } from '@mui/material';

export default function Contacts() {
    const { data: contacts, isFetching } = useFetchContactsQuery();

    return (        
    
      <Box display='flex'>
        <div>
          <Typography variant='h3' sx={{m: 3}}>Add contact</Typography>
      <ContactForm />
      
        </div>
      
        {isFetching && <Spinner />}
        <Box sx={{ml: 6}}>
          <Typography variant='h3' sx={{m: 3}}>Contacts</Typography>
           {contacts?.length > 0 ? (
            <Filter sx={{mt: 2}} />
      ) : (
                    <Typography variant='h3' sx={{ m: 3 }}>
          There are no contacts in your phonebook!
        </Typography>
      )}
      {contacts?.length > 0 && <ContactList />}
        </Box>
     

    </Box>
  );

}