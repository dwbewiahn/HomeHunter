import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginButtons from './LoginButtons';
import LoginDialog from './LoginDialog';

import logo from '../assets/images/homeHunterLogoWhite.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <img src={logo} alt="HomeHunter Logo" style={{width: '100px'}} />
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <LoginButtons onClick={handleOpen} />
                </Box>
            </Toolbar>
            <LoginDialog open={open} onClose={handleClose} />
        </AppBar>
    );
};

export default Navbar;
