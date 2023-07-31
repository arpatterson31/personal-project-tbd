import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import '../styles/Footer.css';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});

const Copyright = () => {
  return (
    <Typography variant="body2">
      Copyright © <Link href="#">DevConnect</Link> {new Date().getFullYear()}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer-basic"
    >
      <Grid container spacing={5} className="socials">
        <Grid item >
          <Link href="https://github.com/arpatterson31/personal-project-tbd">
            <GitHubIcon sx={{ fontSize: 40, color: 163645 }} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/audrey-patterson31/">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} className="footer-nav">
        <Grid container item spacing={3} className="nav-links">
          <Grid item>
            <Link component={LinkBehavior} href="/">Home</Link>
          </Grid>
          <Grid item>
            <Link component={LinkBehavior} href="#">About</Link>
          </Grid>
          <Grid item>
            <Link component={LinkBehavior} href="/terms_and_conditions">Terms & Conditions</Link>
          </Grid>
          <Grid item>
            <Link component={LinkBehavior} href="#">Privacy</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="copyright">
        <Copyright />
      </Grid>
    </Box>
  )
}

export default Footer;