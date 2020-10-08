import { Dispatch, MiddlewareAPI } from 'redux';
import Games from '../data/game.json';
import { AppActions } from '../redux/appActions';

type DisptachActions = Dispatch<AppActions>

const listMiddleware = (
  store: MiddlewareAPI<DisptachActions>,
) => (
  next: DisptachActions,
) => (
  action: AppActions,
) => {
  if (action.type === 'LOAD_GAMES') {
    const { games } = Games;
    store.dispatch({
      type: 'ADD_GAMES',
      games,
    });
  }

  next(action);
};

export default listMiddleware;
