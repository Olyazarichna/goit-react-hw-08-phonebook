import { NavLink } from 'react-router-dom';
export const AppBar = () => {
  return (
    <nav>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/logIn">LogIn</NavLink>
      <NavLink to="/logOut">LogOut</NavLink>
      <NavLink to="/signUp">SignUp</NavLink>
    </nav>
  );
};
