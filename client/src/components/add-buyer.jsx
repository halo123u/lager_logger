import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class AddBuyer extends Component {
	constructor() {
		super();
		this.state = {
      account_num : '',
      company : '',
      buyer : '',
      street : '',
      state : '',
      city : '',
      neighborhood : '',
      zipcode : '',
      phone : '',
      email : '',
      delivery_day : '',
      delivery_time : '',
      premises : null,
	  status : '',
	  redirect: false,
	  currentPage: '/'
		}
	}

	componentWillMount() {
		if(!this.props.auth){
			this.setState({
				redirect:true
			});
		}
	}

	handleInputChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name] : value,
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios.post('/accounts', {
			account_num : this.state.account_num,
      company : this.state.company,
      buyer : this.state.buyer,
      street : this.state.street,
      state : this.state.state,
      city : this.state.city,
      neighborhood : this.state.neighborhood,
      zipcode : this.state.zipcode,
      phone : this.state.phone,
      email : this.state.email,
      delivery_day : this.state.delivery_day,
      delivery_time : this.state.delivery_time,
      premises : this.state.premises,
      status : this.state.status,
		})
		.then(res => {
			this.setState({
				currentPage: '/accounts',
				redirect:true
			});
		}).catch(err => console.log(err));
	}

	render () {
		//console.log(this.props)
		return (
			<div id='add-account'>
				{this.state.redirect? <Redirect to={`${this.state.currentPage}`}/>: null}
				<h1>Add Account</h1>
				<form onSubmit={this.handleSubmit}>
					<div className='box padded'>
						<label>
							Account Number
							<input 
								type='text' 
								name='account_num' 
								value={this.state.account_num} 
								onChange={this.handleInputChange}
								placeholder='666666' 
							required />
						</label>

						<label>
							Company Name
							<input
								type='text'
								name='company'
								value={this.state.company}
								onChange={this.handleInputChange}
								placeholder='Apple' 
								required />
						</label>

						<label>
							Buyer
							<input
								type='text'
								name='buyer'
								value={this.state.buyer}
								onChange={this.handleInputChange}
								placeholder='Apple' 
							required />
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
								placeholder='placeholder'
							required />
						</label>

						<label>
							Neighborhood  <span className='optional'>(optional)</span>
							<input
								type='text'
								name='neighborhood'
								value={this.state.neighborhood}
								onChange={this.handleInputChange}
								placeholder='Flatiron' />
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

						<label>
							Phone Number
							<input
								type='text'
								name='phone'
								value={this.state.phone}
								onChange={this.handleInputChange}
								placeholder='555-678-910' 
							required />
						</label>

						<label>
							Email Address
							<input
								type='text'
								name='email'
								value={this.state.email}
								onChange={this.handleInputChange}
								placeholder='email@gmail.com' 
							required />
						</label>
					</div>

					<div className='box padded'>
						<label>
							Account Status
							<select name='status' onChange={this.handleInputChange}>
								<option hidden>Select Option</option>
								<option value='past'>Past</option>
								<option value='current'>Current</option>
								<option value='prospective'>Prospective</option>
							</select>
						</label>

						<label>
							Premises
							<select name='premises' onChange={this.handleInputChange}>
								<option hidden>Select Option</option>
								<option value='off'>off-premises</option>
								<option value='on'>on-premises</option>
							</select>
						</label>

						<label>
							Preferred Delivery Day <span className='optional'> (optional)</span>
							<input
								type='date'
								name='delivery_day'
								onChange={this.handleInputChange} />

						</label>

						<label>
							Preferred Time of Delivery <span className='optional'>(optional)</span>
							<input
								type='time'
								name='delivery_time'
								onChange={this.handleInputChange} />
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
