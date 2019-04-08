import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/navbar'
import Home from './components/home/home'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">        
       <Navbar/>
       <Home/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
