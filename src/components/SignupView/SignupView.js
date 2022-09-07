import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from 'services/authApi';
import { login } from 'redux/authSlice';
import { useNavigate } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';

export const SignupView = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const {
        data: { user, token },
      } = await signup({ name, email, password });
      await dispatch(login({ user, token }));
      setName('');
      setEmail('');
      setPassword('');
      navigate('/contacts');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name </Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Name"
          required
          className="me-2 w-25"
          aria-label="Search"
        />
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Email"
          required
          className="me-2 w-25"
          aria-label="Search"
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Password"
          required
          className="me-2 w-25"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit" className='mt-2' >
          Sign up
        </Button>
      </Form>
    </>
  );
};

export default SignupView;
