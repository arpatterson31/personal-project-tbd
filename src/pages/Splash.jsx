import Login from '../Components/Login';
import Grid from '@mui/material/Grid';


const Splash = () => {
  return (
    <Grid 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Splash page for now..</h1>
      <Login text="Join the Community / Sign Up" />
    </Grid>
  )
}

export default Splash;