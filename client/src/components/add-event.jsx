import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddEvent extends Component {
	constructor() {
		super();
		this.state = {
			event_name: null,
			date: null,
			time: null,
			street: null,
			city: null,
			state: null,
			zipcode: null
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name] : value,
		})
	}


	render () {
		return (
			<div>
				<h1>Add Event</h1>
				<form>
					<div className='box padded'>
						<label>
							Event Name *
							<input 
								type='text' 
								placeholder='The Met Gala' 
								value={this.state.event_name}
								onChange={this.handleInputChange}
							required />
						</label>

						<label>
							Date *
							<input 
								type='date'
								value={this.state.event_name}
								onChange={this.handleInputChange}
								required />
						</label>

						<label>
							Time *
							<input 
								type='time' 
								name='time' 
								onChange={this.handleInputChange} />
						</label>
						</div>

						<div className='box padded'>
						<label>
							Street Address
							<input 
								type='text' 
								name='street' 
								value={this.state.street}
								onChange={this.handleInputChange}
								placeholder='123 Cherry Lane' 
							required />
						</label>

						<label>
							City
							<input 
								type='text' 
								name='city' 
								value={this.state.city}
								onChange={this.handleInputChange}
								placeholder='New York' 
							required />
						</label>

						<label>
							State
							<input 
								type='text' 
								name='state' 
								value={this.state.state}
								onChange={this.handleInputChange}
								placeholder='NY' 
							required />
						</label>

						<label>
							Zipcode
							<input 
								type='number' 
								name='zipcode' 
								placeholder='12345' 
								value={this.state.zipcode}
								onChange={this.handleInputChange}
							required />
						</label>
					</div>

					<div className='box padded'>
						<p>Additional Info</p>
						<textarea className='small-text' placeholder='text area content'/>
					</div>

					<div className='buttons'>
						<button type='submit'>OK</button>
						<Link to='/events'><button>Cancel</button></Link>
					</div>

				</form>
			</div>
		);
	}
}

export default AddEvent;