import React, { Component } from 'react';
import logo from './assets/logo.xcf';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import LandingPage from './scenes/landingpage/landingpage';
import Navigation from './components/navigation/navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Switch>
        <Route path='/home' component={LandingPage}/>
        <Route render={() => <Redirect to="/home"/>}></Route>
      </Switch>
      </div>
    );
  }
}

export default App;
