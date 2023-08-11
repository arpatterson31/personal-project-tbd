import User from '../Components/User';

const Profile = ({ user }) => {

  // TODO: Grab user from DB instead of passing in from auth0
  // TODO: create the layout for this page
  // TODO: button for edit profile info


  return (
    <>
      <User data={user} />
    </>
  )
};

export default Profile;