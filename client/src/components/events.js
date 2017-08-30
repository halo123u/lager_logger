import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Events extends Component {
	constructor() {
		super();
		this.state = {
			accounts : null,
			accountsLoaded: false,
		}
		
	}
/*
	componentDidMount() {
		console.log('did mount');
		axios.get('/events')
		.then(res => {
			console.log(res.data);
			this.setState({
				accounts: res.data,
				accountsLoaded: true
			});
		}).catch(err => console.log(err));
	}
*/
	renderEvent(event) {
		return(
			<div className='box event'>
				<h4>{event.event_name}</h4>
				<p>{event.date}</p>
				<p>{}</p>
			</div>
		)	
	}

	render () {
		return (
			<div id='events'>
				<h1>Calendar</h1>
				<Link to='/add-event'><button>Add Event</button></Link>
				<div className='box event'>
					<h4>Drexler's</h4>
					<p>Viral lo-fi pickled pok pok mustache actually.</p>
				</div>
			</div>
		);
	}
}

export default Events;

