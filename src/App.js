import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import './App.css';

export default function App() {

  return (
    <div className="App page-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

