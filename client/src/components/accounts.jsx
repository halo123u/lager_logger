import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Accounts extends Component {
	constructor() {
		super();
		this.state = {
			accounts : null,
			accountsLoaded: false,
			redirect: false,
			page:'/'
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
	
	handleSingleAccount = (id)=>{
		this.setState({
			redirect: true,
			page:`/accounts/${id}`
		},()=>{
			this.props.handleSelect(id);
		});
	}


	renderAccount(account) {
		return( 
			// <Link to={`/accounts/${account.account_id}`} key={account.account_id}>
				<div onClick={()=>this.handleSingleAccount(account.account_id)} className='box account' key={account.account_id}>
					<h3>{account.company}</h3>
					<h3>#{account.account_num}</h3>
				</div>
			// </Link>
		)	
	}

	render () {
		return (
			<div id='accounts'>
				{this.state.redirect? <Redirect to={this.state.page}/>: null}	
				<Link to='/add-account'><button>Add Account</button></Link>
				<h1>Accounts</h1>
				<div id='button-container'>
				<Link to='/add-account'><button className='large-button'>Create Account</button></Link>
				</div>
				<div id='recent-activity'>
					<h5>Recent Activity</h5>
					<a className='blue'>Sort By</a>
					<a className='blue'>Filter</a>
				</div>
				{this.state.accountsLoaded ? this.state.accounts.map(this.renderAccount) : ''}
			</div>
		);
	}
}

export default Accounts;