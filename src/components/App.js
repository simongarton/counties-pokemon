import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main.js';
import Pokemon from './Pokemon.js';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/:pokemon" component={Pokemon} />
    </Switch>
  </main>
);

export default App;
