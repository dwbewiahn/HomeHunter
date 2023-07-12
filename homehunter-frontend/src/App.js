import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import RegisterPage from './pages/RegisterPage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#292929', 
    },
    secondary: {
      main: '#1D1D1F', 
    },
    background: {
      default: '#f5f5f5', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

//python manage.py runserver
// dir homehunter-frontend
//npm start
