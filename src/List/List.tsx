import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import {
  Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadGames } from './actions';

function List() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

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
            {games.map((x) => (
              <tr key={x.id}>
                <td><Link to={`/list/${x.id}`}>{x.title}</Link></td>
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
