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
			visitsLoaded: false,
			notes: null,
			notesLoaded: false,
		}
		this.renderActivity = this.renderActivity.bind(this);
	}

	componentDidMount() {
		console.log('did mount')
		//get orders
		axios.get('/orders/comps')
		.then(res => {
			this.setState({
				orders: res.data.map(order => {order.icon = Order; return order}),
				ordersLoaded: true,
			});
		}).catch(err => console.log(err));
		//get visits
		axios.get('/visits/comps')
		.then(res => {
			this.setState({
				visits: res.data.map(visit => {visit.icon = Visit; return visit}),
				visitsLoaded: true,
			});
		}).catch(err => console.log(err));
		//get notes
		axios.get('/notes/comps/accounts')
		.then(res => {
			this.setState({
				notes: res.data.map(note => {note.icon = Note; return note}),
				notesLoaded: true,
			})
		})
	}

	renderActivity(activity) {
		return (
			<div className='box activity'>
				<img src={activity.icon} className='icon'/>
				<div className='content'>	
					<h4>{activity.company}</h4>
					<p className='date'>{activity.order_date || activity.date_info || ''}</p>
					<p>{activity.delivery_info || activity.content || ''}</p>
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
				{this.state.ordersLoaded ? this.state.orders.map(this.renderActivity) : ''}
				{this.state.visitsLoaded ? this.state.visits.map(this.renderActivity) : ''}
				{this.state.notesLoaded ? this.state.notes.map(this.renderActivity) : ''} 
			</div>
		)
	}
}

export default RecentActivity;