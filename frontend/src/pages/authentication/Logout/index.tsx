import { useContext } from 'react';
import { useSignOutGoogleMutation } from '../../../gql/generated';
import AuthContext from '../../../contexts/AuthContext';

type Props = {};

const Logout = (props: Props) => {
  const [signOutGoogleMutation] = useSignOutGoogleMutation();
  const contextValue = useContext(AuthContext);
  let dispatch: any = undefined;
  // console.log('contextValue', contextValue);

  if (contextValue) {
    dispatch = contextValue.dispatch;
  }

  const handleSignOut = async () => {
    try {
      // Call the signOutGoogleMutation to sign the user out
      let mutationRes = await signOutGoogleMutation();

      if (
        mutationRes.data?.signOutGoogle &&
        mutationRes.data?.signOutGoogle.__typename === 'Error'
      ) {
        console.error('Error signing out:', mutationRes.data?.signOutGoogle);
      }
      // delete user from the localstorage
      localStorage.removeItem('userId');
      // Wipe out the Auth context (user:null) / dipatch 'LOGOUT'
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Error signing out:', error);
      if (localStorage.getItem('userId')) {
        dispatch({ type: 'LOGOUT' });
      }
    }
  };
  // button to sign out
  return <button onClick={handleSignOut}>Logout</button>;
};

export default Logout;
