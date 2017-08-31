import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Visit from '../symbols/visit_icon.svg';
import axios from 'axios';

class AddVisit extends Component {
	constructor() {
		super();
		this.state = {
			date_info: null,
     	account_id: null,
 			employee_id: null,
 			content: null,
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
		console.log(this.props);
		this.setState({
			account_id: this.props.match.params.id
		})
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
		axios.post('/visits', {
			date_info: this.state.date_info,
		})
	}

	render() {
		return (
			<div id='add-visit'>
				<h1>Create Visit <img src={Visit}/></h1>
				<div className='box padded'>
					<label>
					   Date of Visit *
						<input type='date' name='date' value={this.state.date_info}/>
					</label>

					<label>
					   Time of Visit *
						<input type='time' name='date'/>
					</label>
				</div>

				<div className='box padded'>
					<p>Additional Info</p>
					<textarea maxlength="500" className='small-text'/>
				</div>

				<div className='buttons'>

						<button type='submit'>OK</button>
						<Link to='/visits'><button>Cancel</button></Link>
					</div>

			</div>
		)
	}
}

export default AddVisit;