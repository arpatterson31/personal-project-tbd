import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommunityMember from '../Components/CommMember';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Community = () => {

  // TODO: Grab all the users from the db, 
  // TODO: store to state, 
  // TODO: render separate Community Member components to list all of our awesome users

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = `${SERVER_URL}/users`;
        let response = await axios.get(url);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }


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
