import React, { Component } from 'react';

class AddBuyer extends Component {
	render () {
		return (
			<div>
				<h1>Add Account</h1>
				<form>
					<div className='box padded'>
						<label>
							Account Number *
							<input type='number' name='account_num' placeholder='placeholder' required />
						</label>

						<label>
							Company Name *
							<input type='text' name='company' placeholder='placeholder' required/>
						</label>

						<label>
							Buyer *
							<input type='text' name='buyer' placeholder='placeholder' required/>
						</label>
					</div>

					<div className='box padded'>
						<label>
							Street Address *
							<input type='text' name='street' placeholder='placeholder' required />
						</label>

						<label>
							Neighborhood *
							<input type='text' name='neighborhood' placeholder='placeholder' required />
						</label>

						<label>
							City *
							<input type='text' name='city' placeholder='placeholder' required />
						</label>

						<label>
							State *
							<input type='text' name='state' placeholder='placeholder' required />
						</label>

						<label>
							Zipcode *
							<input type='number' name='zipcode' placeholder='placeholder' required />
						</label>

						<label>
							Phone Number *
							<input type='text' name='phone' placeholder='placeholder' required />
						</label>

						<label>
							Email Address *
							<input type='text' name='email' placeholder='placeholder' required />
						</label>
					</div>

					<div className='box padded'>
						<label>
							Preferred Delivery Day
							<select>
								<option hidden>Select Option</option>
							</select>
						</label>

						<label>
							Preferred Time of Delivery
							<select>
								<option hidden>Select Option</option>
							</select>
						</label>

						<label>
							Account Status *
							<select>
								<option hidden>Select Option</option>
								<option>Pending</option>
							</select>
						</label>

						<label>
							Premises *
							<select>
								<option hidden>Select Option</option>
							</select>
						</label>

					</div>
					

					<div className='buttons'>
						<button type='submit'>OK</button>
						<button>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddBuyer;