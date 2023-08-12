import User from '../Components/User';
import { useParams } from 'react-router-dom';

const Profile = ({ users }) => {

  // TODO: Grab user from DB instead of passing in from auth0
  // TODO: create the layout for this page
  // TODO: button for edit profile info
  let { id } = useParams();

  let uniqueUser = users.find(user => user._id === id)

  return (
    <>
      <User data={uniqueUser} />
    </>
  )
};

export default Profile;