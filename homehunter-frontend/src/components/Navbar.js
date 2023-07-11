import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from '../assets/images/homeHunterLogoWhite.png';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={logo} alt="HomeHunter Logo" style={{ width: '100px' }} />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
