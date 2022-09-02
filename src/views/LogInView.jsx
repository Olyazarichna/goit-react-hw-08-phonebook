import { useState } from 'react';
import { useLoginMutation } from '../services/authApi';
// import { login } from 'redux/authSlice';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
export const LogInView = () => {
  const [login, status] = useLoginMutation();
  // const user = useSelector(state => state.auth);

  const { isLoading } = status;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const data = { email, password };
    login(data);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
              placeholder="Email"
              required
            />

            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.currentTarget.value)}
              placeholder="Password"
              minLength="4"
              maxLength="8"
              required
            />

            <Button variant="primary" type="submit" disabled={isLoading}>
              Login
            </Button>
          </Form.Group>
        </InputGroup>
      </Form>
    </>
  );
};
