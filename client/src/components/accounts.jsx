import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Accounts extends Component {
	render () {
		return (
			<div id='accounts'>
				<Link to='/add-account'><button>Add Account</button></Link>
				<div id='recent-activity'>
					<h5>Recent Activity</h5>
					<a>Filter</a>
				</div>

				<div className='box activity'>
					<h3>Drexlers</h3>
					<h3>#RD0956</h3>
				</div>

			</div>
		);
	}
}

export default Accounts;