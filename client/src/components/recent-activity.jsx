import React, { Component } from 'react';
import Note from '../symbols/Note-Icon.png';
import Visit from '../symbols/Visit-Icon.png';
import Order from '../symbols/Order-Icon.png';

class RecentActivity extends Component {
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
						<h4>Drexler's</h4>
						<p>Viral lo-fi pickled pok pok mustache actually. </p>
					</div>
				</div>
			</div>
		)
	}
}

export default RecentActivity;