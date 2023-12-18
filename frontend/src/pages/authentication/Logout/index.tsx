import { useContext } from 'react';
import { useSignOutGoogleMutation } from '../../../gql/generated';
import AuthContext from '../../../contexts/AuthContext';

const Logout = () => {
  const [signOutGoogleMutation] = useSignOutGoogleMutation();
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    // Handle the case where contextValue is undefined
    // This could be returning null, throwing an error, or showing a message
    return <div>Context not available</div>;
  }

  const { dispatch } = contextValue;

  const handleSignOut = async () => {
    try {
      const mutationRes = await signOutGoogleMutation();
      if (mutationRes.data?.signOutGoogle?.__typename === 'Error') {
        console.error('Error signing out:', mutationRes.data?.signOutGoogle);
        // Optionally, handle specific logout errors here
      } else {
        // Successful logout
        localStorage.removeItem('userId');
        dispatch({ type: 'LOGOUT' });
        // Optionally, redirect or notify the user
      }
    } catch (error) {
      console.error('Error signing out:', error);
      dispatch({ type: 'LOGOUT' }); // Ensure logout in case of mutation error
    }
  };

  return <button onClick={handleSignOut}>Logout</button>;
};

export default Logout;
