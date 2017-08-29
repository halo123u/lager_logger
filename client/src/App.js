import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Dashboard from './components/dashboard';
import BuyerPage from './components/buyer-page';
import AddNote from './components/add-note';
import AddOrderVisit from './components/add-order-visit';
import AddEvent from './components/add-event';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <AddEvent />
      </div>
    );
  }
}

export default App;
