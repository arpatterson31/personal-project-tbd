import Login from '../Components/Login';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/Splash.css';


const Splash = () => {

  return (
    <Grid
    container
    id="splash-main"
    justifyContent="center"
    alignItems="center"
    >
      <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        id="splash-content"
        
      >
        <Typography variant='h1' sx={{textAlign: 'center', fontSize: '3.5rem'}} gutterBottom>DevConnect</Typography>
        <Typography variant='h2' sx={{ textAlign: 'center', fontSize: '2.3rem'}} gutterBottom>A platform for creative <Box component='span'>minds</Box>.</Typography>
        <Typography variant='body2' gutterBottom sx={{ width: '60%' }}>
          Welcome to DevConnect, an innovative platform tailored for developers seeking to collaborate on projects and engage with like-minded professionals. DevConnect fosters an environment where developers can create and showcase their projects while finding potential collaborators to join their ventures. By joining DevConnect, make new friends and connections within the developer community, search and contribute to projets that can enrich your portfolio, and make a lasting impact on exciting projects.
        </Typography>
        <Grid container item justifyContent="center" spacing={{ xs: 2, md: 8 }}>
          <Grid item >
            <Login text="Join the Community" />
          </Grid>
          <Grid item>
            <Login text="Sign Up" />
          </Grid>
        </Grid>
      </Grid>
      </Grid>
  )
}

export default Splash;