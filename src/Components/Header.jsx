import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TerminalIcon from '@mui/icons-material/Terminal';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LoggedInPic from './LoggedInPic';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const settings = ['Home', 'Profile', 'Logout'];
const pages = ['Projects', 'Community', 'Profile']

const theme = createTheme({
  palette: {
    secondary: {
      main: '#9BABBA'
    }
  }
})

const Header = ({ currentUser }) => {

  const { logout } = useAuth0();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <ConnectWithoutContactIcon sx={{ fontSize: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <TerminalIcon sx={{ fontSize: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DevConnect
            </Typography>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  page === 'Profile' ?
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        component={Link}
                        to={`/${page.toLowerCase()}/${currentUser._id}`}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                    :
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" component={Link} to={`/${page.toLowerCase()}`}>{page}</Typography>
                    </MenuItem>
                ))}
              </Menu>
            </Box>

            <TerminalIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              DevConnect
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                page === 'Profile' ?
                  <Typography
                    key={page}
                    component={Link}
                    to={`/profile/${currentUser._id}`}
                    sx={{ my: 2, color: 'white', display: 'block', mr: 8 }}
                  >
                    {page}
                  </Typography>
                  :
                  <Typography
                    key={page}
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                    sx={{ my: 2, color: 'white', display: 'block', mr: 8 }}
                  >
                    {page}
                  </Typography>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LoggedInPic user={currentUser} />
              </IconButton>
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
                      <Typography textAlign="center" style={{ textDecoration: 'underline' }}>{setting}</Typography>
                    </MenuItem>
                    :
                    setting === 'Profile' ?
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" component={Link} to={`/${setting.toLowerCase()}/${currentUser._id}`}>{setting}</Typography>
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