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

        {Game.games.map((x) => {
          if (x.id === `${id}`) {
            return (
              <table key={x.id}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <td>{x.title}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td className="left">{x.description}</td>
                  </tr>
                  <tr>
                    <th>Image</th>
                    <td><img className="game_list" src={`${process.env.PUBLIC_URL}/images/${x.images}`} alt={x.title} /></td>
                  </tr>
                  <tr>
                    <th>Review</th>
                    <td>{x.review}</td>
                  </tr>
                  <tr>
                    <th>Requirements</th>
                    <td>{x.requirements}</td>
                  </tr>
                  <tr>
                    <th>Release Date</th>
                    <td>{x.date}</td>
                  </tr>
                  <tr>
                    <th>Platform</th>
                    <td>{x.platform}</td>
                  </tr>
                  <tr>
                    <th>Developers</th>
                    <td>{x.developers}</td>
                  </tr>
                  <tr>
                    <th>Publisher</th>
                    <td>{x.publisher}</td>
                  </tr>
                </thead>
              </table>
            );
          }
          return null;
        })}
      </Container>
    </div>
  );
}

export default Detail;
