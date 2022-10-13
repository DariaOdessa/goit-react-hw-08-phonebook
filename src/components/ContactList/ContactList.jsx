import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsSlice';
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
    <table>
      <tbody>
        {vizibleContacts.reverse().map(contact => (
          <Box as="tr" mb={3} key={contact.id}>
            <ContactItem contact={contact} />
          </Box>
        ))}
      </tbody>
    </table>
  );
};
