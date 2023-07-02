import React from 'react';
import HomePage from './pages/HomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#292929', // cinza
    },
    secondary: {
      main: '#1D1D1F', // cinza mais claro
    },
    background: {
      default: '#f5f5f5', // cinza muito claro para o fundo
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
