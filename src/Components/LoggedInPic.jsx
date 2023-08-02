import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '@mui/material/Avatar';

const LoggedInPic = () => {
  const { user, isAuthenticated } = useAuth0();

  return(
    isAuthenticated && (
      <Avatar alt={user.name} src={user.picture}/>
    )
  )
}

export default LoggedInPic;