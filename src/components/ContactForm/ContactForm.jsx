import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsApi';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation();

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const haveContacts = values => {
    const sameName = contacts.some(contactName => {
      return contactName.name.toLowerCase() === values.name.toLowerCase();
    });

    return sameName;
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const values = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (haveContacts(values)) {
      toast.success('This contact already exist !');
      reset();
      return;
    } else {
      toast.info('You add new contact !');
      function addMessage() {
        return (
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
          </Alert>
        );
      }

      addContact(values).then(data => console.log('d', data));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChangeName}
            placeholder="Enter name"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChangeNumber}
            placeholder="Enter phone number"
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
