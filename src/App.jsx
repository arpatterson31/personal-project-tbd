import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './pages/Home';
import Splash from './pages/Splash';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import TermsConditions from './pages/TermsConditions';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: {
      fontFamily: 'Arvo, serif'
    },
    h2: {
      fontFamily: 'Arvo, serif'
    },
    h3: {
      fontFamily: 'Arvo, serif'
    },
    h4: {
      fontFamily: 'Arvo, serif'
    },
    h5: {
      fontFamily: 'Arvo, serif'
    },
    h6: {
      fontFamily: 'Arvo, serif'
    }
  },
});

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {
          isAuthenticated ?
            <BrowserRouter>
              <Header />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/project_board"
                  element={<Projects />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
                <Route
                  path="/terms_and_conditions"
                  element={<TermsConditions />}
                />
              </Routes>
              <Footer />
            </BrowserRouter>
            :
            <Splash />
        }
      </ThemeProvider>
    </>
  )
}

export default App;

