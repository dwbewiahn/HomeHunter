import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#2b2b2b', color: '#bdbdbd', p: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <div>
            <Typography variant="h6" gutterBottom>
              Explore
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Find me a Home
            </Link>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Support Center
            </Link>
          </div>
        </Box>
        <Typography variant="body2" color="inherit" align="center">
          © 2023 HomeHunter |{' '}
          <Link color="inherit" href="#">
            Terms of Service
          </Link>{' '}
          |{' '}
          <Link color="inherit" href="#">
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
