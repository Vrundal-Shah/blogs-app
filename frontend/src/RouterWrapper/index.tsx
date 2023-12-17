// // In RouterWrapper.js

// import React from 'react';
// import { routes } from '../route-object';
// import { useRoutes } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { UserContext } from '../contexts/UserContext';

// type Props = {
//   isAuthenticated: boolean;
//   setIsAuthenticated: (value: boolean) => void;
//   accessToken: string | null;
//   setAccessToken: (token: string | null) => void;
//   userId: string | null;
//   setUserId: (id: string | null) => void;
// };

// const RouterWrapper = (props: Props) => {
//   const {
//     isAuthenticated,
//     setIsAuthenticated,
//     accessToken,
//     setAccessToken,
//     userId,
//     setUserId,
//   } = props;

//   return (
//     <Router>
//       <Routes
//         isAuthenticated={isAuthenticated}
//         setIsAuthenticated={setIsAuthenticated}
//         accessToken={accessToken}
//         setAccessToken={setAccessToken}
//         userId={userId}
//         setUserId={setUserId}
//       />
//     </Router>
//   );
// };

// const Routes = (props: Props) => {
//   const content = useRoutes(routes);

//   return <>{content}</>;
// };

// export default RouterWrapper;
export {};
