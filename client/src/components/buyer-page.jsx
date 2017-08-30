import React, { Component } from 'react';
import RecentActivity from './recent-activity';
import { Link } from 'react-router-dom'

class BuyerPage extends Component {
	render () {
		return (
			<div>
				<h1>Drexlers</h1>
				<div className='box buyer'>
					<div className='left'>
						<p>
							East Village<br/>
							9 Avenue A,<br/>
							New York, NY<br/>
							10009
						</p>
					</div>
					<div className='right'>
						<h3>#RD0956</h3>
						<a>Edit</a>
					</div>
				</div>
				<div id='add-buttons'>
					<Link to='/add-visit'><button>Add Visit</button></Link>
					<Link to='/add-note'><button>Add Note</button></Link>
					<Link to='/add-order'><button>Add Order</button></Link>
				</div>
				<RecentActivity />
			</div>
		);
	}
}

export default BuyerPage;