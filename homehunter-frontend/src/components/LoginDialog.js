import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Link, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginDialog = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username,
        password,
      });
      console.log(response.data);
      onClose();
      navigate('/search');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ backgroundColor: 'grey.300', padding: '10px' }}>
        <DialogTitle>LOG IN TO HOME HUNTER</DialogTitle>
      </Box>
      <DialogContent>
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
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Box sx={{ flexGrow: 1, marginLeft: '15px' }}>
          <Link href="#" color="inherit">
            I forgot my password
          </Link>
        </Box>
        <Button onClick={handleLogin} color="primary" variant="outlined" size="large">
          Login
        </Button>
      </DialogActions>
      <Box sx={{ backgroundColor: 'grey.300', padding: '10px', textAlign: 'center' }}>
        Don't have an account? <Link href="/register">Sign up</Link>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
