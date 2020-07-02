import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Register from './Register';
import Login from './Login';

function App() {
  return (
    <>
      <div>
        <Link to="/">
          Register
        </Link>
        <Link to="/login">
          Login
        </Link>
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/"><Register /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
