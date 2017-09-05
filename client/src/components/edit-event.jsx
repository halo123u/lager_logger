import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class EditEvent extends Component {
    constructor() {
        super();
        this.state = {
            event_name: null,
			date_info: null,
			time_info: null,
			street: null,
			city: null,
			state: null,
			zipcode: null,
			additional_info: null,
			account_id:null,
			employee_id:null,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`/events/${this.props.match.params.event_id}`)
        .then((res) => {
            console.log(res);
            const event = res.data;
            this.setState({
                event_name: this.state.event_name,
                date_info: this.state.date_info,
                time_info: this.state.time_info,
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode,
                additional_info: this.state.additional_info,
                account_id: this.state.account_id,
                employee_id: this.state.employee_id,
            })
        }).catch(err => console.log(err));
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        axios.put(`/events/${this.props.match.params.event_id}`, {
            event_name: this.state.event_name,
			date_info: this.state.date_info,
			time_info: this.state.time_info,
			street: this.state.street,
			city: this.state.city,
			state: this.state.state,
			zipcode: this.state.zipcode,
			additional_info: this.state.additional_info,
			account_id: this.state.account_id,
			employee_id: this.state.employee_id,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
        e.target.reset();
    }

    render() {
        return(
            <div className="edit">
                <h1>Edit Event</h1>
                <form onSubmit={this.handleFormSubmit}>
					<div className='box padded'>
						<label>
							Event Name *
							<input 
								type='text' 
								name='event_name' 
								placeholder='The Met Gala' 
								value={this.state.event_name}
								onChange={this.handleInputChange}
							required />
						</label>

						<label>
							Date *
							<input 
								type='date'
								name='date_info' 
								value={this.state.date_info}
								onChange={this.handleInputChange}
								required />
						</label>

						<label>
							Time *
							<input 
								type='time'
								value={this.state.time_info} 
								name='time_info' 
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
						<textarea className='small-text' placeholder='text area content' name='additional_info' value={this.state.additional_info} onChange={this.handleInputChange}/>
					</div>

					<div className='buttons'>
						<button type='submit'>OK</button>
						<Link to='/events'><button>Cancel</button></Link>
					</div>

				</form>
            </div>
        )
    }
}

export default EditEvent;