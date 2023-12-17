import { useEffect, useContext } from 'react';
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
  const [signUpGoogle, { data, loading, error }] = useMutation(SIGN_UP_GOOGLE);
  // const {
  //   isAuthenticated,
  //   setIsAuthenticated,
  // accessToken,
  //   setAccessToken,
  //   userId,
  //   setUserId,
  // } = useUserContext();
  const contextValue = useContext(AuthContext);
  let dispatch: any = () => {};
  // const navigate = useNavigate();

  if (contextValue) {
    dispatch = contextValue.dispatch;
  }

  useEffect(() => {
    if (accessToken) {
      try {
        console.log(`accessToken when signUpGoogle: ${accessToken}`);
        signUpGoogle({ variables: { accessToken } });
      } catch (err) {
        console.log(err);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  // useEffect(() => {
  //   console.log(`userId updated: ${userId}`);
  // }, [userId]);

  useEffect(() => {
    if (data && !error) {
      // navigate user to profile
      // setIsAuthenticated(true);
      // console.log(`setIsAuthenticated: ${isAuthenticated}`);
      console.log('here', data);
      if (data.signUpGoogle.__typename === 'AuthResponse') {
        console.log(`userId after signUpGoogle: ${data.signUpGoogle.userId}`);
        // console.log(setUserId(() => data.signUpGoogle.userId));
        localStorage.setItem(
          'userId',
          JSON.stringify({ payload: data.signUpGoogle.userId }),
        );
        dispatch({
          type: 'LOGIN',
          payload: { userId: data.signUpGoogle.userId },
        });
        // console.log(`userId after signUpGoogle: ${userId}`);
      }
      // navigate('/');
    } else if (error) {
      console.log(error);
      // navigate user to login
      // navigate('/authentication/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response: any) => {
      setAccessToken(response.access_token);
      console.log('here');
      console.log(response);
    },
    onError: (error) => {
      console.log('error callback handleGoogleLogin');
      console.log(error);
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
