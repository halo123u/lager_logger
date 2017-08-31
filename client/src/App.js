import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';

import Nav from './components/nav';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/admin-dashboard';
import BuyerPage from './components/buyer-page';
import AddEmpl from './components/add-emp';
import AddNote from './components/add-note';
import AddOrderVisit from './components/add-order-visit';
import AddEvent from './components/add-event';
import AddBuyer from './components/add-buyer';
import Accounts from './components/accounts';
import Events from './components/events';
import Login from './components/login';
import changePassword from './components/change-password'
import EditNote from './components/edit-note';
import ViewNote from './components/view-note';


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
		if (response.auth == false) {
			console.log('wrong credentials');
		}
		else if (response.user.user_type === 'admin'&& response.auth == true) {
			console.log('this is an admin');
			this.setState({
			auth: response.auth,
			user: response.user,
			redirect: true,
			currentPage: '/admin-dash'
		});
		} else if (response.user.user_type === 'employee' && response.auth == true ) {
			console.log('this is an employee');
			this.setState({
			auth: response.auth,
			user: response.user,
			redirect: true,
			currentPage: '/add-account'
		});
		}
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
		  <Route exact path='/admin-dash' component={()=> <AdminDashboard auth={this.state.auth} user={this.state.user} />} />
		  <Route exact path='/add-emp' component ={()=> <AddEmpl auth={this.state.auth} user={this.state.user}/>} />
	      <Route exact path='/accounts' component={Accounts}/>
		  <Route exact path='/accounts/:id' component={BuyerPage}/>
	      <Route path='/add-note' component={AddNote}/>
	      <Route exact path='/events' component={Events}/>
	      <Route path='/add-event' component={AddEvent}/>
	      <Route path='/add-account' component={() => <AddBuyer auth={this.state.auth} user={this.state.user}/>}/>
	      <Route path='/buyer' component={BuyerPage}/>
	      <Route path='/add-order-visit' component={AddOrderVisit}/>
        <Route path='/dash' component={Dashboard} />
        <Route path='/change-pass/:emp_id' component={changePassword} />
        <Route path='/edit-note/:note_id' component={EditNote}/>
        <Route path='/view-note/:note_id' component={ViewNote}/>
				</Switch>
	      </div>
				</div>
			</Router>
    );
  }
}

export default App;
