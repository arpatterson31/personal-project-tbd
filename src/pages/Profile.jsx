

const Profile = ({ user }) => {

  // TODO: Grab user from DB instead of passing in from auth0
  // TODO: create the layout for this page
  // TODO: button for edit profile info


  return (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
};

export default Profile;