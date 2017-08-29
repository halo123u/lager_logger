import React, { Component } from 'react';
import RecentActivity from './recent-activity';
import Triangle from '../symbols/Triangle.png';
import { Link } from 'react-router-dom'

class BuyerPage extends Component {
	render () {
		return (
			<div>
				<div className='box buyer'>
					<div className='left'>
						<h3>Drexlers</h3>
						<p className='address'>East Villiage
						9 Avenue A,
						New York, NY
						10009</p>
					</div>
					<div className='right'>
						<h3>#RD0956</h3>
						<Link to='/add-order-visit'><button>Add Order/Visit</button></Link>
						<img src={Triangle} />
					</div>
				</div>
				<div id='add-note'>
					<Link to='/add-note'><button>Add Note</button></Link>
				</div>
				<RecentActivity />
			</div>
		);
	}
}

export default BuyerPage;