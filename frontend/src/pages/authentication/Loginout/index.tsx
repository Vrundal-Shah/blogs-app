import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import Login from '../Login';
import Logout from '../Logout';

type Props = {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const Loginout = ({ accessToken, setAccessToken }: Props) => {
  const contextValue = useContext(AuthContext);
  const state = contextValue?.state.userId;

  return (
    <div>
      {state ? (
        <Logout />
      ) : (
        <Login accessToken={accessToken} setAccessToken={setAccessToken} />
      )}
    </div>
  );
};

export default Loginout;
