import React from 'react';
import { Provider } from 'react-redux';

type Store = React.ComponentProps<typeof Provider>['store'];

function createReduxProvider(store: Store) {
  const ReduxProvider = ({ children }: { children: JSX.Element }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );

  return ReduxProvider;
}

export default createReduxProvider;
