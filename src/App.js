import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path ='/' component={HomePage} />
      </Switch>
    </HashRouter>
  )
}

export default App;
