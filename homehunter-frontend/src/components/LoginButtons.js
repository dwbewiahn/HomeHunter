import React from 'react';
import { Button } from '@mui/material';

const LoginButtons = ({ onClick }) => {
  return (
    <div>
      <Button variant="outlined" color="inherit" style={{ marginRight: '10px' }} onClick={onClick}>
        Login / Sign Up
      </Button>
    </div>
  );
};

export default LoginButtons;
