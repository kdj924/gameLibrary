import { AppActions } from '../redux/appActions';

export type Game = {
  id: string;
  title: string;
  description: string;
  images: string;
};

type State = {
  games: Game[];
};

const initialState: State = {
  games: [],
};

function listReducer(
  state = initialState,
  action: AppActions,
): State {
  switch (action.type) {
    case 'ADD_GAMES':
      return {
        games: action.games,
      };

    default:
      return state;
  }
}

export default listReducer;
