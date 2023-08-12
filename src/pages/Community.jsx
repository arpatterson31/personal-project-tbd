import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import CommunityMember from '../Components/CommMember';



const Community = ({ users }) => {

  // TODO: Grab all the users from the db, 
  // TODO: store to state, 
  // TODO: render separate Community Member components to list all of our awesome users

  return (
    <Container maxWidth="xl">
      <Grid container my={3} spacing={2}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user._id}>
            <CommunityMember data={user}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Community;
