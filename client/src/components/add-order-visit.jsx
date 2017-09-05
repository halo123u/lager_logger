import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

class AddOrderVisit extends Component {
	constructor(){
		super();
		this.state = {
			order: false,
			delivery_info_time: 10
		}
	}

	handleFormSubmission = (e) => {
		e.preventDefault();
		console.log('this is where we make an axios post request to /order with this.state')
		if(this.state.order){
			// include employee id here also
			axios.post('/orders', this.state)
		}
	}

	handleOrder = (e) => {
		console.log('selecting order')
		this.setState({
			order: true,
		})
	}
	deHandleOrder = (e) => {
		console.log('deselecting order')
		this.setState({
			order: false,
		})
	}
	handleInput = e => {
		let name = e.target.name 
		let value = e.target.value 
		this.setState({
			[name]: value
		})
	}
	
	render () {
		return (
			<div>
				<h1>Add Order/Visit</h1>
				<form onSubmit={e => this.handleFormSubmission(e)}>
					<div className='box'>
						<label>
							Account *
							<input type='text' name='account_id' placeholder='placeholder' required />
						</label>

						<div>
							<label>
								<input  type='radio' onClick={e =>{this.deHandleOrder(e)}} name='order'/>
							Visit
							</label>
						</div>
						<div>
							<label>
								<input onClick={e =>{this.handleOrder(e)}} type='radio' name='order'/>
						 	Order
							</label>
						</div>

					<label>
						Number of Cases *
						<input type='number' onChange={this.handleInput} name="cases" placeholder='#' required />
					</label>

					<label>
						Date of Delivery *
						<input type='date' onChange={this.handleInput} name='delivery_info_date' required />
					</label>

					<label>
						Time of Delivery *
						<select name='delivery_info_time' onChange={this.handleInput}>
							<option value="9">9am</option> 
							<option value="10" selected>10am</option>
							<option value="11">11am</option>
							<option value="12">12pm</option>
							<option value="1">1pm</option>
							<option value="2">2pm</option>
							<option value="3">3pm</option>
							<option value="4">4pm</option>
							<option value="5">5pm</option>
							<option value="6">6pm</option>
							<option value="7">7pm</option>
							<option value="8">8pm</option>
						</select>
					</label>

				</div>
				<div className='box'>
					<p>Notes</p>
					<textarea maxlength="500" name='notes' onChange={this.handleInput} className='small-text' placeholder='500 character limit'/>
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