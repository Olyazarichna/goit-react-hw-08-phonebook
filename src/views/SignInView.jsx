import { useState } from 'react';

export const SignUpView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    setName('');
    setEmail('');
    setPassword('');
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
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
