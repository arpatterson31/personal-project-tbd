import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import TermsConditions from './pages/TermsConditions';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
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
    </>
  )
}

export default App;

