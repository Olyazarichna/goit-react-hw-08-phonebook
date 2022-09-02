import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from './AppBar.module.css';

export const AppBar = () => {
  const user = useSelector(state => state.auth);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/register" className={css.link}>
              SignUp
            </NavLink>

            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>

            <NavLink to="/login" className={css.link}>
              LogIn
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      {user.isLoggedIn && <UserMenu />}
    </>
  );
};
