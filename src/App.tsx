import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './css/App.css';
import ReduxProvider from './redux/store';
import Home from './Home';
import List from './List/List';
import About from './About';
import Detail from './Detail';
import Logo from './images/koboLogo.jpg';
import Logo2 from './images/reactnativeLogo.jpg';

function App() {
  return (
    <ReduxProvider>
      <Router>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
              <Dropdown.Item as={Link} to="/about">About me</Dropdown.Item>
              <Dropdown.Item as={Link} to="/list">List</Dropdown.Item>
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/list/:id">
              <Detail />
            </Route>
            <Route path="/list">
              <List />
            </Route>
          </Switch>
        </div>
        <footer className="p-3">
          <img id="kobo_image" src={Logo} alt="Kobo Logo" />
          <img id="reactnative_image" src={Logo2} alt="ReactNative Logo" />
        </footer>
      </Router>
    </ReduxProvider>
  );
}

export default App;
