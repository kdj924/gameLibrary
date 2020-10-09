import games from './data/game.json';

export default {
  getGames: () => games,
  /**
   * Load the first game from the list. Takes 3 seconds to return a result
   * in order to simulate http call.
   */
  getLatestGame: async () => new Promise<typeof games['games'][number]>((resolve) => {
    setTimeout(() => {
      const game = games.games[0];
      resolve(game);
    }, 3000);
  }),
};
