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
				accountInfoLoaded: true
			})
			console.log(this.state)
		}).catch(err => console.log(err));

	}

	renderAccountInfo() {
		console.log('render account info')
		console.log(this.state.accountInfo)
		return (
			<div>
				<h1>{this.state.accountInfo.buyer}</h1>
				<div className='box buyer'>
					<div className='left'>
						<p>
							{this.state.accountInfo.neighborhood || ''}<br/>
							{this.state.accountInfo.street}<br/>
							{this.state.accountInfo.city}, {this.state.accountInfo.state}<br/>
							{this.state.accountInfo.zipcode}
						</p>
					</div>
					<div className='right'>
						<h3>#RD0956</h3>
						<a>Edit</a>
					</div>
				</div>
				<div id='add-buttons'>
					<Link to={`${this.props.match.params.id}/add-visit/`}><button>Add Visit</button></Link>
					<Link to='/add-note'><button>Add Note</button></Link>
					<Link to='/add-order'><button>Add Order</button></Link>
				</div>
				<RecentActivity />
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