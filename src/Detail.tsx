import React from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Game from './data/game.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">Detail</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th className="size">Image</th>
              <th>Review</th>
              <th>Requirements</th>
              <th>Release Date</th>
              <th>Platform</th>
              <th>Developers</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {Game.games.map((x) => {
              if (x.id === `${id}`) {
                return (
                  <tr key={x.id}>
                    <td>{x.title}</td>
                    <td className="left">{x.description}</td>
                    <td className="size"><img className="game_list_detail" src={`${process.env.PUBLIC_URL}/images/${x.images}`} alt={x.title} /></td>
                    <td>{x.review}</td>
                    <td>{x.requirements}</td>
                    <td>{x.date}</td>
                    <td>{x.platform}</td>
                    <td>{x.developers}</td>
                    <td>{x.publisher}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Detail;
