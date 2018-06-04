/* eslint-disable*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroList from './components/HeroList';
import data from './initial_data';

class App extends Component {
  render() {
    return (
      <div>
        <HeroList heroes={data.heroes}/>
      </div>
    );
  }
}

export default App;
