import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from './components/HomePage';
import SinglePet from './components/SinglePet';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path ='/' component={HomePage} />
        {/*Pass down the routeProps in order to access the URL number which can be used to load the page*/}
        <Route path ="/pet/:petId" render={(routeProps) => <SinglePet routeProps={routeProps} />} />
      </Switch>
    </HashRouter>
  )
}

export default App;
