import React from 'react';
import Container from 'react-bootstrap/Container';
import Game from './data/game.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';

function List() {
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">List</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {Game.games.map((x, i) => (
              <tr key={i}>
                <td>{x.title}</td>
                <td className="left">{x.description}</td>
                <td><img className="game_list" src={`${process.env.PUBLIC_URL}/images/${x.images}`} alt={x.title} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default List;
