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
			visits: null,
			notes: null,
		}
	}

	componentDidMount() {
		console.log('did mount')
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
			</div>
		)
	}
}

export default RecentActivity;