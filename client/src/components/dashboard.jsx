import React, { Component } from 'react';
import RecentActivity from './recent-activity';

class Dashboard extends Component {
	render () {
		return (
			<main>
				<h1>Dashboard</h1>
				<div className='box'>
					<div id='dummy-img'></div>
				</div>

				<a href='/events'>
				<div className='box'>
					<h2>Upcoming</h2>
					<ul>
						<li><span>9/1/17</span>Electric Zoo</li>
						<li><span>10/1/17</span>Annual Montauk Surf Classic</li>
						<li><span>5/28/18</span>Race To Remember</li>
					</ul>
				</div>
				</a>
				<RecentActivity />
			</main>
		);
	}
}

export default Dashboard;