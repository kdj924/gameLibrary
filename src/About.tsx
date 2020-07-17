import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <div>
      <Container className="p-3">
        <h1 className="text-left">About me</h1>
        <Jumbotron>
          <h1 className="text-left">
            I am Dongjoon Kim, borned in South Korea. I have an electrical enginnering background.
            After grduation, I wanted to study and learn software skills.
            I have studied courese in web development such as Spring, Java, Oracle
            for 10 months at the coding bootcamp in Korea.
            I was fortunate to join the Rakuten Kobo Japan team.
            And now, I am Learning React Native, Redux from the team leader, Oskar.
          </h1>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default About;
