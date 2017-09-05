import React, { Component } from 'react';
import RecentActivity from './recent-activity';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class BuyerPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			accountInfo: null,
			accountInfoLoaded: null,
			fireRedirect:false,
		}
		this.renderAccountInfo = this.renderAccountInfo.bind(this);
	}

	componentWillMount() {
		console.log(this.props.accId);
		if(!this.props.auth){
            this.setState({
                fireRedirect :true
            });
    	} else {
		axios.get(`/accounts/id/${this.props.accId}`)
		.then(res => {
			console.log(res.data);
			this.setState({
				accountInfo: res.data,
				accountInfoLoaded: true,
			})
			console.log(this.state)
		}).catch(err => console.log(err));
	}
	}

	renderAccountInfo() {
		console.log('render account info')
		console.log(this.state.accountInfo)
		return (
			<div>
				<div className='account-header'>
					<h1>{this.state.accountInfo.buyer}</h1>
					<a className='blue'>Edit</a>
				</div>
				<div className='box buyer'>
					<div className='left'>
						<div>
							<b>Location</b>
							<p>
								{this.state.accountInfo.neighborhood || ''}<br/>
								{this.state.accountInfo.street}<br/>
								{this.state.accountInfo.city}, {this.state.accountInfo.state}<br/>
								{this.state.accountInfo.zipcode} <br/>
							</p>
							</div>
							<div>

							<b>Deliver</b> <br/>
							<p>
							{this.state.accountInfo.delivery_day} <br/>
							{this.state.accountInfo.delivery_time}
							</p>
							</div>
					
					</div>
					<div className='right'>
						<div>
						<p>
							<b>Account Number</b> <br/>
							#RD{this.state.accountInfo.account_num} <br/>
							Current <br/>
							{this.state.accountInfo.premises ? 'On Premises' : 'Off Premises'} <br/>
						</p>
						</div>
						<div>
						<p>
							<b>Contact</b> <br/>
							{this.state.accountInfo.buyer} <br/>
							{this.state.accountInfo.email} <br/>
							{this.state.accountInfo.phone}								
						</p>
						</div>
					</div>
				</div>
				<div id='add-buttons'>
					<Link to={`${this.props.accId}/add-visit/`}><button>+ Visit</button></Link>
					<Link to={`/accounts/${this.props.accId}/add-note `}><button>+ Note</button></Link>
					<Link to={`/accounts/${this.props.accId}/add-order`}><button>+ Order</button></Link>
				</div>
				<RecentActivity />
			</div>
		);
	}

	render () {
		return (
			<div>
								{this.state.fireRedirect? <Redirect to='/'/>: null}	
			{this.state.accountInfoLoaded ? this.renderAccountInfo() : <h1>loading</h1>}
			</div>
		)
	}
}

export default BuyerPage;
