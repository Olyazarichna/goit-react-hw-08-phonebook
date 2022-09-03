import { useState } from 'react';
import { useLoginMutation } from '../../services/authApi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router';
import { login } from 'redux/authSlice';
import { toast } from 'react-toastify';
export const LoginView = () => {
  const [logIn, status] = useLoginMutation();
 const dispatch = useDispatch();
 const navigate = useNavigate();

  const { isLoading } = status;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const {
        data: { user, token },
      } = await logIn({ email, password });
      dispatch(login({ user, token }));
      navigate('/contacts');
      setEmail('');
      setPassword('');
   
    } catch (error) {
    toast.error(
        'Something went wrong'
      );
    }

   
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
              placeholder="Email"
              required
            />
            <Form.Label>Password</Form.Label>
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

export default LoginView;