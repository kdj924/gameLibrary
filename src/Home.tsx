import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameImage from './images/Games.jpg';
import './css/Home.css';

function Home() {
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">Home</h1>
        <Jumbotron>
          <p id="title_size">
            Welcome To the Game Library
          </p>
        </Jumbotron>
        <h2 className="text-left">About this website</h2>
        <Jumbotron>
          <p className="paragraph_size">
            This website is implemented to learn React Native for myself.
            It shows a list of games I have played so far.
            Also, you can see the games information in detail.
          </p>
        </Jumbotron>
        <img id="game_image" src={GameImage} alt="Game List" />
      </Container>
    </div>
  );
}

export default Home;
