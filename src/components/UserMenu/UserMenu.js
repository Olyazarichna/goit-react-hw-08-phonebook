import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/authSlice';

export const UserMenu = () => {
  const { email } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <p>Welcome {email}</p>
      <button onClick={handleClick}>Log out</button>
    </>
  );
};
