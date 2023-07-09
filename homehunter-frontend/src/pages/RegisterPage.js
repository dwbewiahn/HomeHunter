import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RegisterPage.css';

import { Button, TextField } from '@mui/material';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform data validation and necessary actions
    if (!username || !email || !password || !confirmPassword || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }
    // Other necessary checks and actions before sending to the backend
    console.log('Valid data, send to backend:', {
      username,
      email,
      password,
      confirmPassword,
      phoneNumber,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="button-container">
            <Button type="submit" color="primary">
              Register
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
