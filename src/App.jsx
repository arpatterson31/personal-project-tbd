import './App.css';
import { useState, useEffect, useTransition } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './pages/Home';
import Splash from './pages/Splash';
import Projects from './pages/Projects';
import Profile from './pages/Profile'; 
import About from './pages/About';
import Community from './pages/Community';
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

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

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

  const { isAuthenticated, user } = useAuth0();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `${SERVER_URL}/users`;
        let response = await axios.get(url);
        setUsers(response.data);
        let uniqueUser = response.data.find(person => person.email === user.email)
        setCurrentUser(uniqueUser);
      } catch (error) {
        console.log(error)
      }
    };
    fetchUsers();

  },[user]);


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {
          isAuthenticated ?
            <BrowserRouter>
              <Header currentUser={currentUser}/>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home />}
                />
                <Route
                  exact
                  path="/home"
                  element={<Home />}
                />
                <Route
                  path="/projects"
                  element={<Projects />}
                />
                <Route
                  path="/community"
                  element={<Community users={users} />}
                />
                <Route
                  path="/profile/:id"
                  element={<Profile users={users}/>}
                />
                <Route
                  path="/about"
                  element={<About />}
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

