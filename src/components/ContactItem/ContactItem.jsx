import PropTypes from 'prop-types';
import {
  Button,
  ContactName,
  ContactNumber,
  TableCell,
} from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Spinner } from 'components/Spinner/Spinner';
import Avatar from 'react-avatar';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <TableCell>
        <Avatar round={true} size={40} name={name} />
      </TableCell>
      <TableCell>
        <ContactName>{name}</ContactName>
      </TableCell>
      <TableCell>
        <ContactNumber>{number}</ContactNumber>
      </TableCell>
      <TableCell>
        {' '}
        <Button
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting && <Spinner size={14} />}
          Delete
        </Button>
      </TableCell>
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
