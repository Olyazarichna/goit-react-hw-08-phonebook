import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';
export const AppBar = () => {
  const user = useSelector(state => state.auth);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </Navbar.Brand>

          {user.isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Navbar>
    </>
  );
};
