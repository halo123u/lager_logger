import React, { Component } from 'react';
import Note from '../symbols/note_icon.svg';
import Visit from '../symbols/visit_icon.svg';
import Order from '../symbols/order_icon.svg';
import axios from 'axios';

class RecentActivity extends Component {
	constructor() {
		super();
		this.state = {
			orders: null,
			ordersLoaded: false,
			visits: null,
			notes: null,
		}
		this.renderOrders = this.renderOrders.bind(this);
	}

	componentDidMount() {
		console.log('did mount')
		axios.get('/orders/comps')
		.then(res => {
			this.setState({
				orders: res.data,
				ordersLoaded: true,
			});
		}).catch(err => console.log(err));
	}

	renderOrders(order) {
		return (
			<div className='box activity'>
				<img src={Order} className='icon'/>
				<div className='content'>	
					<h4>{order.company}</h4>
					<p className='date'>{order.order_date}</p>
					<p>{order.delivery_info}</p>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
			<div id='recent-activity'>
					<h5>Recent Activity</h5>
					<a>View All</a>
			</div>
				<div className='box activity'>
					<img src={Note} className='icon'/>
					<div className='content'>	
						<h4>Drexlers</h4>
						<p>Viral lo-fi pickled pok pok mustache actually. </p>
					</div>
				</div>
				{this.state.ordersLoaded ? this.state.orders.map(this.renderOrders) : ''}
			</div>
		)
	}
}

export default RecentActivity;