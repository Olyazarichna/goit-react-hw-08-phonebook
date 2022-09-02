import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const user = useSelector(state => state.auth);
  console.log('user', user);

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">SignUp</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">LogIn</NavLink>
      </nav>
      {user.isLoggedIn && <UserMenu />}
    </>
  );
};
