import CommunityMember from "../Components/CommunityMember";

const Profile = ({ user }) => {

  // TODO: Grab user from DB instead of passing in from auth0
  // TODO: create the layout for this page
  // TODO: button for edit profile info


  return (
    <>
      <CommunityMember data={user} />
    </>
  )
};

export default Profile;