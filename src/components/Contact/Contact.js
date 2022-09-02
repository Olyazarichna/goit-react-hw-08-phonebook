import { useDeleteContactMutation } from 'services/contactsApi';

export const Contact = ({ id, name, number }) => {
  const [deleteContact, result] = useDeleteContactMutation();
  return (
    <li>
      {name}: {number}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={result.isLoading}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
