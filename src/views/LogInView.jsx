import { useState } from 'react';

export const LogInView = () => {
  const [email, setEmail] = useState('olya.zarichna@gmail.com');
  const [password, setPassword] = useState('qwerty1');
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    setEmail('');
    setPassword('');
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
          minLength="4"
          maxMength="8"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
