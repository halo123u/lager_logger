import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Calendar from '../symbols/calendar_month.svg'
import ViewEvent from './view-event';

class Events extends Component {
	constructor() {
		super();
		this.state = {
			events: null,
			eventsLoaded: false,
		}
		
	}

	componentDidMount() {
		console.log('did mount');
		axios.get('/events')
		.then(res => {
			console.log(res.data);
			this.setState({
				events: res.data,
				eventsLoaded: true
			});
		}).catch(err => console.log(err));
	}

	renderEvent() {
		if (this.state.eventsLoaded) {
			return this.state.events.map((event,index) => {
				return (
					<ViewEvent key={event.event_id} events={event} />
				);
			});
		} else return <p>Loading ... </p>
	}

	render () {
		return (
			<div>
				<h1>Calendar</h1>
				<div id='button-container'>
        		<Link to={'/add-event'}><button className='large-button'>Create Event</button></Link>
        		</div>
        <div className='box'> 
        	<img src={Calendar} />
        </div>
				{this.renderEvent()}
			</div>
		);
	}
}

export default Events;

