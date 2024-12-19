"use client"

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/features/user/userSlice';
import styled from 'styled-components';

const LoginForm = styled.form`
  /* Add styles for your login form */
`;

const Login: React.FC = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(userActions.login(usernameInput));
    setUsernameInput('');
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
      />
      <button type="submit">Login</button>
    </LoginForm>
  );
};

export default Login;