import React, { Component } from 'react';
import User from './components/User'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App" id="page-container">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
