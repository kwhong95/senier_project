import React from 'react';
import Dashboard from './Layouts/Dashboard';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
  palette: {
    primary: {
      light: '#6a6a6a',
      main: '#454545',
      dark: '#303030',
      contrastText: '#fff'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme ={theme}>
        <Dashboard />
      </ThemeProvider>   
    </div>
  );
}

export default App;
