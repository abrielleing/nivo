import React, { Component } from 'react';
import './App.css';
import BarGraph from './components/bar.js';
import HorBarGraph from './components/hor_bar.js';
import DonutGraph from './components/donut.js';
import LineGraph from './components/line.js';

class App extends Component {
  render() {
    return (
      <div class="graphs">
        <BarGraph />
        <HorBarGraph />
        <DonutGraph />
        <LineGraph />
      </div>
    )
  }
}

export default App;
