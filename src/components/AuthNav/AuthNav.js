import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
                  <NavLink to="/" className={css.link}>
              Home
            </NavLink>
            <NavLink to="/register" className={css.link}>
              SignUp
            </NavLink>
            <NavLink to="/login" className={css.link}>
              LogIn
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
