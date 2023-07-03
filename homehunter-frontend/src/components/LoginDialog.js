import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Link, Box } from '@mui/material';

const LoginDialog = ({ open, onClose }) => {
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
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Box sx={{ flexGrow: 1, marginLeft: '15px' }}>
          <Link href="#" color="inherit">
            I forgot my password
          </Link>
        </Box>
        <Button onClick={onClose} color="primary" variant="outlined" size="large">
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
