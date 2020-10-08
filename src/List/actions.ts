import { Game } from './reducer';

type AddGames = {
  type: 'ADD_GAMES';
  games: Game[];
}

type LoadGames = {
  type: 'LOAD_GAMES';
}

export function addGames(games: Game[]): AddGames {
  return {
    type: 'ADD_GAMES',
    games,
  };
}

export function loadGames(): LoadGames {
  return {
    type: 'LOAD_GAMES',
  };
}

export type GameActions =
  ReturnType<typeof addGames> |
  ReturnType<typeof loadGames>;
