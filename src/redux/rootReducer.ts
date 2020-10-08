import { combineReducers } from 'redux';
import listReducer from '../List/reducer';
import { AppActions } from './appActions';

type ApplicationState = {
  game: ReturnType<typeof listReducer>;
}

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends ApplicationState {}
}

const rootReducer = combineReducers<ApplicationState, AppActions>({
  game: listReducer,
});

export default rootReducer;
