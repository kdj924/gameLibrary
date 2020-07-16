import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ButtonsShowcase from './showcases/Buttons';
import ToastsShowcase from './showcases/Toasts';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">
            Welcome To React-Bootstrap TypeScript Example
          </h1>
        </Jumbotron>
        <h2>Buttons</h2>
        <ButtonsShowcase />
        <h2>Toasts</h2>
        <ToastsShowcase />
      </Container>
    </div>
  );
}

export default Home;
