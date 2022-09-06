import { useState } from 'react';
import { useLoginMutation } from '../../services/authApi';

import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
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

      if (token) {
        dispatch(login({ user, token }));
        navigate('/contacts');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <p className="my-3">Please log in or sign up</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.currentTarget.value)}
            placeholder="Email"
            required
            autoComplete="on"
          />
        </label>
        <label className="mt-1">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.currentTarget.value)}
            placeholder="Password"
            minLength="4"
            required
            autoComplete="on"
          />
        </label>

        <Button
          className="mt-3"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginView;
