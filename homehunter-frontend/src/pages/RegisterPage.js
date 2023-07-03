import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './RegisterPage.css'

import { Button, TextField } from '@mui/material';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="standard"
        />
        <Button type="submit" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;