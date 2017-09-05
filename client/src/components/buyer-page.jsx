import React, { Component } from 'react';
import RecentActivity from './recent-activity';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BuyerPage extends Component {
	constructor() {
		super()
		this.state = {
			accountInfo: null,
			accountInfoLoaded: null,
			fireRedirect:false,
		}
		this.renderAccountInfo = this.renderAccountInfo.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
		console.log(this.props);
		axios.get(`/accounts/id/${this.props.match.params.id}`)
		.then(res => {
			console.log(res.data);
			this.setState({
				accountInfo: res.data,
				accountInfoLoaded: true,
				fireRedirect:true,
			})
			console.log(this.state)
		}).catch(err => console.log(err));

	}

	renderAccountInfo() {
		console.log(this.state.accountInfo)
		return (
			<div>
				<div className='account-header'>
					<h1>{this.state.accountInfo.buyer}</h1>
					<a className='blue'>Edit</a>
				</div>
				<div className='box buyer'>
					<div className='left'>
						<div className='location'>
							<p className='p-header'>Location</p>
							<p>
								{this.state.accountInfo.neighborhood || ''}<br/>
								{this.state.accountInfo.street}<br/>
								{this.state.accountInfo.city}, {this.state.accountInfo.state}<br/>
								{this.state.accountInfo.zipcode}
							</p>
						</div>
						<div className='deliver'>
							<p className='p-header'>Deliver</p>
							<p>{this.state.accountInfo.delivery_day}</p>
							<p>{this.state.accountInfo.delivery_time}</p>
						</div>
					</div>
					<div className='right'>
						<div className='account-info'>
							<p className='p-header'>Account Info</p>
							<p>##{this.state.accountInfo.account_num}</p>
							<p>{this.state.accountInfo.status}</p>
							<p>{this.state.accountInfo.premises ? 'on-premises' : 'off-premises' }</p>
						</div>

						<div className='contact'>
							<p className='p-header'>Contact</p>
							<p>{this.state.accountInfo.buyer}</p>
							<p>{this.state.accountInfo.phone}</p>
							<p>{this.state.accountInfo.email}</p>

						</div>

						
						
					</div>
				</div>
				<div id='add-buttons'>
					<Link to={`${this.props.match.params.id}/add-visit/`}><button>Add Visit</button></Link>
					<Link to={`/accounts/${this.props.match.params.id}/add-note `}><button>Add Note</button></Link>
					<Link to={`/accounts/${this.props.match.params.id}/add-order`}><button>Add Order</button></Link>
				</div>
				<RecentActivity accountInfo={this.state.accountInfo}/>
			</div>
		);
	}

	render () {
		return (
			<div>
			{this.state.accountInfoLoaded ? this.renderAccountInfo() : <h1>loading</h1>}
			</div>
		)
	}
}

export default BuyerPage;
