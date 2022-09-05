import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const AuthNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
        <NavLink to="/" className='mx-2'>
              Home
            </NavLink>
            <NavLink to="/register" className='mx-2'>
              Sign up
            </NavLink>
            <NavLink to="/login" className='mx-2'>
              Log in
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
