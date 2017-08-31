import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom';
import Visit from '../symbols/visit_icon.svg';
import axios from 'axios';

class AddVisit extends Component {
	constructor() {
		super();
		this.state = {
			date_info: null,
     	account_id: null,
 			employee_id: 1,
 			content: null,
 			redirect: false,
 			currentPage: '/',
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
		console.log(this.props);
		//get employee_id
		axios.get('/auth/success')
		.then(res => {
			this.setState({
				account_id: this.props.match.params.id,
				employee_id: res.data.user.emp_id,
			});
		}).catch(err => console.log(err));
	}

	handleInputChange(e) {
		const name = e.target.name
		const value = e.target.value
		this.setState({
			[name] : value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.content) {
			axios.post('/notes', {
				relationship_id: this.state.account_id,
				note_type: 'ACCOUNT',
				content: this.state.content,
				date_info: this.state.date_info,
				employee_id: this.state.employee_id
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
		}
		axios.post('/visits', {
			date_info: this.state.date_info,
			account_id: this.state.account_id,
			employee_id: this.state.employee_id,
		})
		.then(res => {
			console.log(res)
			this.setState({
				currentPage: `/accounts/${this.state.account_id}`,
				redirect:true
			});
		})
		.catch(err => console.log(err));
		//add note
		
		
	}

	render() {
		return (
			<div id='add-visit'>
				<h1>Create Visit <img src={Visit}/></h1>
				<div className='box padded'>
					<label>
					   Date of Visit *
						<input 
							type='date' 
							name='date_info' 
							value={this.state.date_info}
							onChange={this.handleInputChange}
							required />
					</label>

					<label>
					   Time of Visit *
						<input 
							type='time'
							name='time_info' 
							onChange={this.handleInputChange} 
							required />
					</label>
				</div>

				<div className='box padded'>
					<p>Additional Info</p>
					<textarea maxlength="500" 
						className='small-text' 
						value={this.state.content}
						name='content'
						onChange={this.handleInputChange} />
				</div>

				<div className='buttons'>

						<button type='submit'>OK</button>
						<Link to={`/accounts/${this.state.account_id}`}><button>Cancel</button></Link>
					</div>

			</div>
		)
	}
}

export default AddVisit;