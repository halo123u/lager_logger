import React, { Component } from 'react';

class AddEvent extends Component {
	render () {
		return (
			<div>
				<h1>Add Event</h1>
				<form>
					<div className='box padded'>

						<label>
							Event Name *
							<input type='text' placeholder='placeholder' required />
						</label>

						<label>
							Associated Account
							<input type='text' placeholder='placeholder' />
						</label>
					
						<label>
							Date *
							<input type='date' required />
						</label>

						<label>
							Time *
							<select>
								<option hidden>Select Option</option>
								<option></option>
							</select>
						</label>

					</div>

					<div className='box padded'>
						<p>Location</p>
						<textarea className='small-text' placeholder='text area content'/>
					</div>
					
					<div className='box padded'>
						<p>Notes</p>
						<textarea className='small-text' placeholder='text area content'/>
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

export default AddEvent;