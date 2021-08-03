import React from 'react';

import { handlersCollection, HandlerType } from 'config/routes/handlers';
import { Navigation, Navigator } from 'config/routes';
import { DataManagerProvider } from 'core/settings';
import { BrowserRouter as Router } from 'react-router-dom';
import { ImaxLayout } from 'components/layouts';

import 'core/styles';

export default function App(): JSX.Element {
  const handlers: HandlerType[] = handlersCollection;

  return (
    <DataManagerProvider>
      <Router>
        <ImaxLayout>
          <Navigation blackList={['Details']} />

          <Navigator routes={handlers} />
        </ImaxLayout>
      </Router>
    </DataManagerProvider>
  );
}
