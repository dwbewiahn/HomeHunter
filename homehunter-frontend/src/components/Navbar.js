import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginButtons from './LoginButtons';

import logo from '../assets/images/homeHunterLogoWhite.png';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <img src={logo} alt="HomeHunter Logo" style={{width: '100px'}} />
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <LoginButtons />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;