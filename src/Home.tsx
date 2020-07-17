import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure'
import ToastsShowcase from './showcases/Toasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameImage from './images/Games.jpg';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="text-center">
            Welcome To the Game Library
          </h1>
        </Jumbotron>
        <h2 className="text-left">About this website</h2>
        <Jumbotron>
          <h1 className="text-center">
            This website is implemented to learn React Native for myself. This site shows a list of games I have played so far.
          </h1>
        </Jumbotron>
        <img style={{ height: 'auto', width: '100%' }} src={GameImage} alt="" />
      </Container>
    </div>
  );
}

export default Home;
