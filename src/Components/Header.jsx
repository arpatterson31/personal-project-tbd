import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LoggedInPic from './LoggedInPic';
import Login from './Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const settings = ['Home','Profile', 'Logout'];

const theme = createTheme({
  palette: {
    secondary: {
      main: '#9BABBA'
    }
  }
})

const Header = () => {

  const { isAuthenticated, logout } = useAuth0();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ConnectWithoutContactIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 1
              }}
            >
              DevConnect
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
                {
                  isAuthenticated ?
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                   <LoggedInPic /> 
                  </IconButton>
                  :
                  <Login />
                }   
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  setting === 'Logout' ? 
                  <MenuItem key={setting} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    <Typography textAlign="center" style={{textDecoration: 'underline'}}>{setting}</Typography>
                  </MenuItem>
                  :
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" component={Link} to={`/${setting.toLowerCase()}`}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;