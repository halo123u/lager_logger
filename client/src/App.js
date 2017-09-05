import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';

import Nav from './components/nav';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/admin-dashboard';
import BuyerPage from './components/account-single';
import AddEmpl from './components/add-emp';
import AddNote from './components/add-note';
import AddOrderVisit from './components/add-order-visit';
import AddEvent from './components/add-event';
import AddBuyer from './components/add-buyer';
import Accounts from './components/accounts';
import Events from './components/events';
import Login from './components/login';
import ChangePassword from './components/change-password'
import EditNote from './components/edit-note';
import ViewNote from './components/view-note';
import AddVisit from './components/add-visit';
import EventsSingle from './components/event-single';
import EditEvent from './components/edit-event';
import recentList from './components/list-info';

class App extends Component {
	constructor(){
		super();
		this.state={
			auth:false,
			user:null,
			currentPage: '/',
			redirect: false,
			selectedAccount: null
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
		}
		else if (response.user.user_type === 'employee' && response.auth == true ) {
			console.log('this is an employee');
			this.setState({
			auth: response.auth,
			user: response.user,
			redirect: true,
			currentPage: '/dash'
		});
		}
	}

	handleSelectedAcc = (id) =>{
		console.log(id);
		this.setState({
			selectedAccount: id
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
		  <Route exact path='/admin-dash' component={()=> <AdminDashboard auth={this.state.auth} user={this.state.user} />} />
		  <Route exact path='/add-emp' component ={()=> <AddEmpl auth={this.state.auth} user={this.state.user}/>} />
	      <Route exact path='/accounts' component={() => <Accounts  auth={this.state.auth} user={this.state.user} handleSelect = {this.handleSelectedAcc}/>}/>
		  <Route exact path='/accounts/:id' component={() =>  <BuyerPage auth={this.state.auth} user={this.state.user} accId={this.state.selectedAccount}/>}/>
		  <Route path='/accounts/:id/add-visit' component={AddVisit} />
	      <Route exact path='/events' component={Events}/>
				<Route path='/events/:event_id' component={EventsSingle} />
	      <Route path='/add-event' component={AddEvent}/>
				<Route path='/edit-event/:event_id' component={EditEvent}/>
	      <Route path='/add-account' component={() => <AddBuyer auth={this.state.auth} user={this.state.user}/>}/>
	      <Route path='/add-order-visit' component={AddOrderVisit}/>
        <Route path='/dash' component={()=> <Dashboard  auth={this.state.auth} user={this.state.user}/>} />

        <Route path='/change-password' component={(props) => <ChangePassword  user={this.state.user} note_type="ACC" />}/>

        <Route path='/edit-note/:note_id' component={EditNote}/>
        <Route path='/view-note/:note_id' component={ViewNote}/>
        <Route path='/dash' component={Dashboard} />
        >
        <Route path='/info/:account_id' component={recentList} />
        >

        <Route path='/add-emp/:id/add-note' component={(props) => <AddNote auth={this.state.auth} user={this.state.user} note_type="EMP" id={props.match.params.id} url={props.match.url} />}/>

        <Route path='/orders/:id/add-note' component={(props) => <AddNote auth={this.state.auth} user={this.state.user} note_type="ORD" id={props.match.params.id} url={props.match.url} />}/>

        <Route path='/accounts/:id/add-note' component={(props) => <AddNote auth={this.state.auth} user={this.state.user} note_type="ACC" id={props.match.params.id} url={props.match.url} />}/>
        <Route path='/edit-note/:note_id' component={EditNote}/>
        <Route path='/view-note/:note_id' component={ViewNote}/>

        <Route path='/accounts/:id/add-order' component={(props) => <AddVisit id={props.match.params.id} url={props.match.url}/>}/>



        </Switch>
	    </div>
		</div>
		</Router>
    );
  }
}

export default App;
