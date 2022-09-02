import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSignupMutation, useLoginMutation } from 'services/authApi';
import { login } from 'redux/authSlice';
export const SignUpView = () => {
  const [signup, status, isError] = useSignupMutation();
  // console.log('user', signup);
  // const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const data = { name, email, password };
    signup(data);
    login(data);
    console.log('data', data);
    setName('');
    setEmail('');
    setPassword('');
  };
  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const data = { name, email, password };
  //     await signup(data);
  //     // await dispatch(login(signup.user, signup.token));

  //     // await dispatch(login());
  //   } catch {
  //     console.log(console.error());
  //   }

  // setName('');
  // setEmail('');
  // setPassword('');
  // };
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="password"
          required
        />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};
