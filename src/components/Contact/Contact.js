import { useDeleteContactMutation } from 'services/contactsApi';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

import { AvatarGenerator } from 'random-avatar-generator';

export const Contact = ({ id, name, number }) => {
  const [deleteContact, result] = useDeleteContactMutation();

  const generator = new AvatarGenerator();
 
  return (
    <li className='d-flex align-items-center mb-1 w-75 ' >
      
      <img src={ generator.generateRandomAvatar()} className='w-25 ' alt='avatar'/>
      <ListGroup.Item 
        variant="warning"
        className="d-flex p-1 align-items-center w-75 justify-content-between "
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
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
