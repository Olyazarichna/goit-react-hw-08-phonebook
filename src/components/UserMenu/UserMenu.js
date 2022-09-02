import { useSelector, useDispatch } from 'react-redux';
import { useGetCurrentUserQuery } from 'services/authApi';
// import { useLogoutMutation } from 'services/authApi';
import { logout } from 'redux/authSlice';

export const UserMenu = () => {
  //   const { user } = useGetCurrentUserQuery();
  //   console.log('user', user);

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
