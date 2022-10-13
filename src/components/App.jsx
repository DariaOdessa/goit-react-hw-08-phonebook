import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ConactForm/ContactForm';
import { Phonebook } from './App.styled';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isFetching && <Spinner />}
      {contacts?.length > 0 ? (
        <Filter />
      ) : (
        <Box as="h2" display="block" mt="30px">
          There are no contacts in your phonebook!
        </Box>
      )}
      {contacts?.length > 0 && <ContactList />}

      <GlobalStyle />
    </Phonebook>
  );
};
