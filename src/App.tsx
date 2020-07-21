import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './css/App.css';
import Home from './Home';
import Counter from './List';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="./About">About me</Dropdown.Item>
            <Dropdown.Item href="./List">List</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/List">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
