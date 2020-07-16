import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Counter from './Counter';
import Test from './Test';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./Test">Test</Link>
          </li>
          <li>
            <Link to="./Counter">Counter</Link>
          </li>
        </ul>
        <hr />
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
          <Route path="/Test">
            <Test />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
