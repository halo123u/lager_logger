import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
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
import Login from './components/login';


class App extends Component {
	constructor(){
		super();
		this.state={
			auth:false,
			user:null,
			currentPage: '/',
			redirect: false
		}
	}
	componentWillUpdate = (prevState, nextState) => {
       if(nextState.redirect){
         this.setState({
           redirect: false,
           currentPage: '/'
         });
          return true;
       }else{
         return false
       }
     }
	handleLogin = (response) =>{
		this.setState({
			auth: response.auth,
			user: response.user,
			redirect: true,
			currentPage: '/accounts'
		});
	}
  render() {
    return (
			<Router>
    	
	      <div className="App">
	      <Nav/>
				<div>
				{this.state.redirect ? (<Redirect to={`${this.state.currentPage}`}/>): null}
				<Switch>
	      <Route exact path='/' component={()=><Login handleLogin={this.handleLogin}/>}/>
	      <Route path='/accounts' component={Accounts}/>
		  <Route exact path='/accounts/:id' component={BuyerPage}/>
	      <Route path='/add-note' component={AddNote}/>
	      <Route exact path='/events' component={Events}/>
	      <Route path='/add-event' component={AddEvent}/>
	      <Route path='/add-account' component={AddBuyer}/>
	      <Route path='/buyer' component={BuyerPage}/>
	      <Route path='/add-order-visit' component={AddOrderVisit}/>
				</Switch>
	      </div>
				</div>
			</Router>
    );
  }
}

export default App;
