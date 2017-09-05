import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Accounts extends Component {
	constructor() {
		super();
		this.state = {
			accounts : null,
			accountsLoaded: false,
			redirect: false
		}
		this.renderAccount = this.renderAccount.bind(this);
	}

	componentDidMount() {
		if(!this.props.auth){
            this.setState({
                redirect :true
            });
    	} else {
			axios.get('/accounts')
			.then(res => {
				console.log(res.data);
				this.setState({
					accounts: res.data,
					accountsLoaded: true
				});
			}).catch(err => console.log(err));
		}
}


	renderAccount(account) {
		return( 
			<Link to={`/accounts/${account.account_id}`} key={account.account_id}>
				<div className='box account'>
					<h3>{account.company}</h3>
					<h3>#{account.account_num}</h3>
				</div>
			</Link>
		)	
	}

	render () {
		return (
			<div id='accounts'>
				{this.state.redirect? <Redirect to='/'/>: null}
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