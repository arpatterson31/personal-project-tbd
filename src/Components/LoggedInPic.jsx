import Avatar from '@mui/material/Avatar';

const LoggedInPic = ({ user }) => {

  return (
    <Avatar alt={user.name} src={user.picture} />
  )
}

export default LoggedInPic;