import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import HomePage from './components/HomePage';
import SinglePet from './components/SinglePet';
import EditPet from './components/EditPet'
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import AddPet from './components/AddPet';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path = '/analytics' component={Analytics} />
        {/*Pass down the routeProps in order to access the URL number which can be used to load the page*/}
        <Route exact path = '/pet/add' render={(routeProps) => <AddPet routeProps={routeProps} />} />
        <Route exact path ="/pet/:petId" render={(routeProps) => <SinglePet routeProps={routeProps} />} />
        <Route path ="/pet/:petId/edit" render={(routeProps) => <EditPet routeProps={routeProps} />} />

      </Switch>
    </HashRouter>
  )
}

export default App;
