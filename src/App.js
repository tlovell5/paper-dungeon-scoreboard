import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Home from './pages/Champion';
import Monster from './pages/Monster';
import CustomDice from './pages/CustomDice';
import './App.css';

function App() {
  return (
    <div>
      <h1>Paper Dungeon Scoreboard</h1>

      <Router>
        <nav id='nav'>
          <li id='li'>
            <Link id='a' to='/'>
              Champion
            </Link>
          </li>
          <li id='li'>
            <Link id='a' to='/Monster'>
              Monster
            </Link>
          </li>
          <li id='li'>
            <Link id='a' to='/CustomDice'>
              Custom Dice
            </Link>
          </li>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/Monster'>
            <Monster />
          </Route>

          <Route path='/CustomDice'>
            <CustomDice />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
