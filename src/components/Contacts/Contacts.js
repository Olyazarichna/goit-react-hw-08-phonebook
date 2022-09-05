import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Card from 'react-bootstrap/Card';

export const Contacts = () => {
  return (
    <>
      <ContactForm />
      <Card.Title className='mt-4 my-2'>Find contact by name</Card.Title>
      <Filter />
      <Card.Title className='mt-4'>Contacts</Card.Title>
      <ContactList />
    </>
  );
};

export default Contacts;
