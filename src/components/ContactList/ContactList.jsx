// import { Box } from 'components/Box';
import { List, ListItem } from '@mui/material';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { selectFilter } from 'redux/selectors';

const getVizibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(selectFilter);
  const vizibleContacts = getVizibleContacts(contacts, filter);

  return (
    <List sx={{ width: '100%', maxWidth: 500 }}>
      {vizibleContacts.reverse().map(contact => (
        <ListItem key={contact.id} alignItems="flex-start">
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
