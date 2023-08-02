import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({text = 'Log In'}) => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>{text}</button>;
};

export default LoginButton;