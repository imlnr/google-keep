import './App.css';
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { createTheme } from '@mui/material/styles'; 
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    }
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
