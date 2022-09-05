import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/authSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { contactsApi } from 'services/contactsApi';
export const UserMenu = () => {
  const { email } = useSelector(state => state.auth);
  const dispatch = useDispatch();
 
console.log(contactsApi);
  const handleClick = () => {
    
   
    dispatch(logout());
   dispatch(contactsApi.util.resetApiState()) ;
  };
  return (
    <>
      <Card.Title className="text-white">Welcome {email} </Card.Title>
      <Button variant="warning" onClick={handleClick}>
        Log out
      </Button>
    </>
  );
};
