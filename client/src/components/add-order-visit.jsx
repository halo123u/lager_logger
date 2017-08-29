import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddOrderVisit extends Component {
	render () {
		return (
			<div>
				<h1>Add Order/Visit</h1>
				<form>
					<div className='box'>
						<label>
						Account *
						<input type='text' placeholder='placeholder' required />
						</label>

						<div>
							<label>
								<input type='radio' />
							Visit
							</label>
						</div>
						<div>
							<label>
								<input type='radio' />
						 	Order
							</label>
						</div>

					<label>
						Number of Cases *
						<input type='number' placeholder='#' required />
					</label>

					<label>
						Date of Delivery *
						<input type='date' required />
					</label>

					<label>
						Time of Delivery *
						<select>
							<option hidden>Select Option</option>
							<option></option>
						</select>
					</label>

				</div>
				<div className='box'>
					<p>Notes</p>
					<textarea className='small-text' placeholder='text area content'/>
				</div>
					

					<div className='buttons'>
						<button type='submit'>OK</button>
						<Link to='/buyer'><button>Cancel</button></Link>
					</div>
				</form>
			</div>
		);
	}
}

export default AddOrderVisit;