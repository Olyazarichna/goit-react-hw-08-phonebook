import { useDeleteContactMutation } from 'services/contactsApi';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

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

export default Contact;
