import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import GameImage from './images/Games.jpg';

function About() {
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">About me</h1>
        <Jumbotron>
          <h1 className="text-center">
            This website is implemented to learn React Native for myself. It shows a list of games I have played so far.
          </h1>
        </Jumbotron>
        <img style={{ height: 'auto', width: '100%' }} src={GameImage} alt="" />
      </Container>
    </div>
  );
}

export default About;
