import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from 'services/contactsApi';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const { filter } = useSelector(state => state.filter);
  const  {token} = useSelector(state => state.auth);
  console.log('user', token)
  const filterContacts = () => {
    return data.filter(contactItem => {
      return contactItem.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  return (
    <>
      <ul className="d-flex flex-column justify-content-between w-25">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          filterContacts().map(contact => {
            return (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            );
          })
        ) : null}
      </ul>
    </>
  );
};
export default ContactList;
