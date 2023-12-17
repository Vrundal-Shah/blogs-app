// #TODO Try to complete this later

import { Suspense, lazy } from 'react';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
