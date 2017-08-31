import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './components/nav';
import Dashboard from './components/dashboard';
import BuyerPage from './components/buyer-page';
import AddNote from './components/add-note';
import AddOrderVisit from './components/add-order-visit';
import AddEvent from './components/add-event';
import AddBuyer from './components/add-buyer';
import Accounts from './components/accounts';
import Events from './components/events';


class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      <Nav/>
	      <Route exact path='/' component={Dashboard}/>
	      <Route exact path='/accounts' component={Accounts}/>
	      <Route exact path='/accounts/:id' component={BuyerPage}/>
	      <Route path='/add-note' component={AddNote}/>
	      <Route exact path='/events' component={Events}/>
	      <Route path='/add-event' component={AddEvent}/>
	      <Route path='/add-account' component={AddBuyer}/>
	      <Route path='/buyer' component={BuyerPage}/>
	      <Route path='/add-order-visit' component={AddOrderVisit}/>

	      </div>
	     </Router>
    );
  }
}

export default App;
