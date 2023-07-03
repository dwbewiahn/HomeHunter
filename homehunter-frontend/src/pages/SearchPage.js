import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography, Select, MenuItem, TextField, FormControl, InputLabel, Checkbox, FormControlLabel, Button } from '@mui/material';

const SearchPage = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ bgcolor: '#f5f5f5', height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Hunt your perfect home
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city"
            >
              <MenuItem value="Lisbon">Lisbon</MenuItem>
              <MenuItem value="Vila Nova de Gaia">Vila Nova de Gaia</MenuItem>
              <MenuItem value="Porto">Porto</MenuItem>
              <MenuItem value="Amadora">Amadora</MenuItem>
              <MenuItem value="Braga">Braga</MenuItem>
            </Select>
          </FormControl>
         
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default SearchPage;
