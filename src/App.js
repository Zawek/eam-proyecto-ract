import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import FooterPage from './components/FooterPage/Footer'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">        
       <Navbar/>
       <Home/>
       <FooterPage/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
