// #TODO Try to complete this later

// import type { FC, ReactNode } from 'react';
// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useUserContext } from '../../contexts/UserContext';

// interface GuestGuardProps {
//   children: ReactNode;
// }

// const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
//   const { isAuthenticated } = useUserContext();

//   if (isAuthenticated) {
//     return <Navigate to="/u" />;
//   }

//   return <>{children}</>;
// };

// GuestGuard.propTypes = {
//   children: PropTypes.node,
// };

// export default GuestGuard;

export {};
