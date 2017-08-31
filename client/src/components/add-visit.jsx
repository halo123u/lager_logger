import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Visit from '../symbols/visit_icon.svg';

class AddVisit extends Component {
	render() {
		return (
			<div id='add-visit'>
				<h1>Create Visit <img src={Visit}/></h1>
				<div className='box padded'>
					<label>
					   Date of Visit *
						<input type='date' name='date'/>
					</label>

					<label>
					   Time of Visit *
						<input type='time' name='date'/>
					</label>
				</div>

				<div className='buttons'>
						<button type='submit'>OK</button>
						<Link to='/buyer'><button>Cancel</button></Link>
					</div>
					
			</div>
		)
	}
}

export default AddVisit;