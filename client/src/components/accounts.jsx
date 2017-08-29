import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Accounts extends Component {
	constructor() {
		super();
		this.state = {
			accounts : null,
			accountsLoaded: false,
		}
		this.renderAccount = this.renderAccount.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
		axios.get('/accounts')
		.then(res => {
			console.log(res.data);
			this.setState({
				accounts: res.data,
				accountsLoaded: true
			});
		}).catch(err => console.log(err));
	}

	renderAccount(account) {
		return(
			<div className='box account'>
				<h3>{account.company}</h3>
				<h3>#{account.account_num}</h3>
			</div>
		)	
	}

	render () {
		return (
			<div id='accounts'>
				<Link to='/add-account'><button>Add Account</button></Link>
				<div id='recent-activity'>
					<h5>Recent Activity</h5>
					<a>Filter</a>
				</div>
				{this.state.accountsLoaded ? this.state.accounts.map(this.renderAccount) : ''}
			</div>
		);
	}
}

export default Accounts;