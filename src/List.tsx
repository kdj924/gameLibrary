import React from 'react';
import Container from 'react-bootstrap/Container';
import Game from './data/game.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameImage from './images/Games.jpg';
import './css/Home.css';

function List() {
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">List</h1>
        <ul>
          {Game.games.map(x => {
            return (
              <>
                <table>
                  <tr>
                    <th>{x.title}</th>
                    <th className="left">{x.description}</th>
                    <th><img className="game_list" src={process.env.PUBLIC_URL + '/images/' + x.images} alt="game_images " /></th>
                  </tr>
                </table>
                {/* <li>{x.title} | {x.description}
                <img className="game_list" src={process.env.PUBLIC_URL + '/images/' + x.images} alt="game_images " />
              </li> */}
              </>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default List;
