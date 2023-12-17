// import { lazy } from 'react';
// import type { RouteObject } from 'react-router';

// import Loadable from './components/Loadable';
// import MainLayout from './pages/MainLayout';
// import AuthGuard from './components/AuthGuard';
// import GuestGuard from './components/GuestGuard';
// import NonAuthenticatedHome from './pages/Home/NonAuthenticatedHome';
// import AuthenticatedHome from './pages/Home/AuthenticatedHome';
// import Posts from './pages/Posts';
// import CreatePost from './pages/CreatePost';
// import CreateTag from './pages/Tags/components/CreateTag';
// import Tags from './pages/Tags';
// // import Login from './pages/authentication/Login';

// // *  AUTHENTICATION PAGES
// const Login = Loadable(lazy(() => import('./pages/authentication/Login')));

// //  * HOME PAGE
// const Home = Loadable(lazy(() => import('./pages/Home')));

// export const routes: RouteObject[] = [
//   {
//     path: 'authentication',
//     children: [
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       // {
//       //   path: 'register',
//       //   element: (
//       //     <GuestGuard>
//       //       <Register />{' '}
//       //     </GuestGuard>
//       //   ),
//       // },
//     ],
//   },

//   {
//     path: '/u',
//     element: (
//       <AuthGuard>
//         <MainLayout />
//       </AuthGuard>
//     ),
//     // children: [
//     //   {
//     //     path: '/',
//     //     element: (
//     //       <AuthGuard>
//     //         <AuthenticatedHome />
//     //       </AuthGuard>
//     //     ),
//     //   },
//     // ],
//   },

//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: (
//           <GuestGuard>
//             <NonAuthenticatedHome />
//           </GuestGuard>
//         ),
//       },
//     ],
//   },
//   {
//     path: '/posts',
//     children: [
//       {
//         path: 'all',
//         element: (
//           // <AuthGuard>
//           <Posts />
//           // </AuthGuard>
//         ),
//       },
//       {
//         path: 'create',
//         element: (
//           // <AuthGuard>
//           <CreatePost />
//           // </AuthGuard>
//         ),
//       },
//       {
//         path: 'tags',
//         children: [
//           {
//             path: 'create',
//             element: (
//               // <AuthGuard>
//               <CreateTag />
//               // </AuthGuard>
//             ),
//           },
//           {
//             path: 'all',
//             element: (
//               // <AuthGuard>
//               <Tags />
//               // </AuthGuard>
//             ),
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default routes;
export {};
