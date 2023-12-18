import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import AuthContext from './contexts/AuthContext';
import NonAuthenticatedHome from './pages/Home/NonAuthenticatedHome';
import AuthenticatedHome from './pages/Home/AuthenticatedHome';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Tags from './pages/Tags';
import Loginout from './pages/authentication/Loginout';
import Header from './components/Header';
import SinglePost from './pages/Posts/components/SinglePost';
// import Post from './pages/Posts/components/Post';

const isProduction =
  process.env.NODE_ENV === 'production' ? 'production' : null;
const allowedOrigin = isProduction
  ? 'https://blogs-app-y5yb.onrender.com' // Replace with your actual production domain
  : 'http://localhost:4000';

const client = new ApolloClient({
  uri: allowedOrigin,
  cache: new InMemoryCache(),
  credentials: 'include',
});

console.log(process.env.REACT_APP_CLIENT_ID);

const App = () => {
  // const content = useRoutes(routes);
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  // const [userId, setUserId] = useState<string | null>(null);
  const contextValue = useContext(AuthContext);
  console.log(`contextValue: ${contextValue}`);
  let state: null | string = null;

  if (contextValue?.state.userId) {
    state = contextValue?.state.userId;
    console.log(`state: ${state ? 'yes' : 'no'}`);
  }

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID || ''}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/posts/my"
              element={
                state ? (
                  <Posts />
                ) : (
                  <Loginout
                    accessToken={accessToken}
                    setAccessToken={setAccessToken}
                  />
                )
              }
            />

            <Route
              path="/posts/create"
              element={
                state ? (
                  <CreatePost />
                ) : (
                  <Loginout
                    accessToken={accessToken}
                    setAccessToken={setAccessToken}
                  />
                )
              }
            />
            <Route
              path="/loginout"
              element={
                <Loginout
                  accessToken={accessToken}
                  setAccessToken={setAccessToken}
                />
              }
            />
            <Route
              path="/tags"
              element={
                state ? (
                  <Tags />
                ) : (
                  <Loginout
                    accessToken={accessToken}
                    setAccessToken={setAccessToken}
                  />
                )
              }
            />
            <Route path="/posts/all" element={<Posts />} />
            <Route
              path="/posts/:id"
              element={<SinglePost smallCard={false} />}
            />
            <Route
              path="/"
              element={state ? <AuthenticatedHome /> : <NonAuthenticatedHome />}
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
