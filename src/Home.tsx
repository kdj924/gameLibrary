import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameImage from './images/Games.jpg';

function Home() {
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">Home</h1>
        <Jumbotron>
          <h1 className="text-center">
            Welcome To the Game Library
          </h1>
        </Jumbotron>
        <h2 className="text-left">About this website</h2>
        <Jumbotron>
          <h1 className="text-center">
            This website is implemented to learn React Native for myself. It shows a list of games I have played so far. Also, you can see the games information in detail.
          </h1>
        </Jumbotron>
        <img style={{ height: 'auto', width: '100%' }} src={GameImage} alt="" />
      </Container>
    </div>
  );
}

export default Home;
