import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@containers/Nav';
import TaskOne from '@containers/TaskOne';
import TaskTwo from '@containers/TaskTwo';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        path="/"
        exact
        component={TaskOne}
      />
      <Route
        path="/task-two"
        component={TaskTwo}
      />
    </Switch>
  </Router>
);

export default App;
