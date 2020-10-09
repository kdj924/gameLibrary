import React, { useState } from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import GameImage from './images/Games.jpg';
import LatestGameModal from './LatestGameModal';
import './css/Home.css';

function Home() {
  const [show, setShow] = useState(false);
  const handleModalClose = () => setShow(false);

  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">Home</h1>
        <Jumbotron>
          <p id="title_size">
            Welcome To the Game Library
          </p>
          <p>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show me the latest movie I might like!
            </Button>
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
      {show && <LatestGameModal onClose={handleModalClose} />}
    </div>
  );
}

export default Home;
