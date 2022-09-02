import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
export const Contacts = () => {
  return (
    <>
      <ContactForm />
      <h2>Find contact by name</h2>
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
};

export default Contacts;
