import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'services/contactsApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from '@reduxjs/toolkit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    console.log('values', values);
    if (haveContacts(values)) {
      toast.success('This contact already exist !');
      reset();
      return;
    } else {
      toast.info('You add new contact !');
      addContact(values);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form className="d-flex" onSubmit={onHandleSubmit}>
        <Form.Label>Name </Form.Label>
        <Form.Control
          className="me-2 w-25"
          aria-label="Search"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
        />

        <Form.Label>Number </Form.Label>
        <Form.Control
          className="me-2 w-25"
          aria-label="Search"
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          placeholder="Enter phone number"
        />

        <Button variant="outline-success" type="submit">
          Add contact
        </Button>
      </Form>
      {/* w-25 */}
      {/* <form onSubmit={onHandleSubmit}>
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
        </label> */}
      {/* <label>
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
      </form> */}
    </>
  );
};

export default ContactForm;
