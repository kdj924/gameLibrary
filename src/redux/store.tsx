import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import createReduxProvider from './ReduxProvider';
import listMiddleware from '../List/middleware';

type Window = {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const w = (window as Window);

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = (w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      listMiddleware,
    ),
  ),
);

const ReduxProvider = createReduxProvider(store);

export default ReduxProvider;
