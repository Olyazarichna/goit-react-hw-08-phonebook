import { useDeleteContactMutation } from 'services/contactsApi';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  return (
    <ListGroup.Item
      variant="warning"
      className="d-flex p-1 justify-content-between"
    >
      {name}: {number}
      <Button
        variant="warning"
        type="button"
        onClick={() => deleteContact(id)}
        disabled={result.isLoading}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

};
export default Contact;