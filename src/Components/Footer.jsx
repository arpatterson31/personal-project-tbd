import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
      Copyright © <Link href="#">Will put website</Link> {new Date().getFullYear()}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer-basic"
    >
      <Container maxWidth="sm'" className="socials">
        <GitHubIcon />
        <LinkedInIcon />
      </Container>
      <Divider />
      <Container maxWidth="sm">
        <Box
          component="ul"
        >
          <Typography variant="body1" component="li">
            <Link component={LinkBehavior} href="/">Home</Link>
          </Typography>
          <Typography variant="body1" component="li">
            <Link component={LinkBehavior} href="#">About</Link>
          </Typography>
          <Typography variant="body1" component="li">
            <Link component={LinkBehavior} href="/terms_and_conditions">Terms & Conditions</Link>
          </Typography>
          <Typography variant="body1" component="li">
            <Link component={LinkBehavior} href="#">Privacy</Link>
          </Typography>
        </Box>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer;