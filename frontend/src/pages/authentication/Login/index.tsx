import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@apollo/client';
import { SIGN_UP_GOOGLE } from '../../../queries/queries';
import AuthContext from '../../../contexts/AuthContext';

type Props = {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const Login = ({ accessToken, setAccessToken }: Props) => {
  const contextValue = useContext(AuthContext);
  let dispatch: any = () => {};
  const navigate = useNavigate();

  if (contextValue) {
    dispatch = contextValue.dispatch;
  }

  const [signUpGoogle] = useMutation(SIGN_UP_GOOGLE, {
    onCompleted: (data) => {
      if (data.signUpGoogle.__typename === 'AuthResponse') {
        localStorage.setItem(
          'userId',
          JSON.stringify({ payload: data.signUpGoogle.userId })
        );
        dispatch({
          type: 'LOGIN',
          payload: { userId: data.signUpGoogle.userId },
        });
        navigate('/'); // Navigate to home or dashboard
      }
    },
    onError: (error) => {
      console.error(error);
      navigate('/authentication/login'); // Navigate to login on error
    },
  });

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response: any) => {
      setAccessToken(response.access_token);
      console.log('Google login successful:', response);

      // Trigger the signUpGoogle mutation
      if (response.access_token) {
        signUpGoogle({ variables: { accessToken: response.access_token } });
      }
    },
    onError: (error) => {
      console.error('Google login error:', error);
    },
  });

  return (
    <>
      <FcGoogle
        onClick={() => handleGoogleLogin()}
        style={{
          fontSize: '3rem',
          border: '1px solid #fff',
          padding: '1rem',
        }}
      />
    </>
  );
};

export default Login;
