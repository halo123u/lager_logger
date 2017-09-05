import React, { Component } from 'react';
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

class EventsSingle extends Component {
    constructor() {
        super();
        this.state= {
            event: null,
            eventLoaded: false,
        }
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    componentDidMount() {
        axios.get(`/events/${this.props.match.params.event_id}`)
        .then(res => {
            this.setState({
                eventLoaded: true,
                event: res.data,
            })
        }).catch(err => console.log(err));
    }

    deleteEvent() {
        axios.delete(`/events/${this.props.match.params.event_id}`)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    renderEventOrLoading() {
        if (this.state.eventLoaded) {
            return (
                <div>
                    <h1>View Event</h1>
                    <Link to={`/edit-event/${this.state.event.event_id}`}>Edit</Link>
                    <div className="box padded">
                        <h3>{this.state.event.event_name}</h3>
                        <h4>{this.state.event.date_info}</h4>
                        <p>{this.state.event.city}</p>
                        <p>{this.state.event.time_info}</p>
                    </div>
                    <div className="box padded">
                        <p>{this.state.event.additional_info}</p>
                    </div>
                    <button onClick={this.deleteEvent}>Delete</button>
                    <Link to={'/events'}>Back to Calendar</Link>
                </div>
            )
        } else return <p>Loading ... </p>
    }

    render() {
        return (
            <div>
                {this.renderEventOrLoading()}
            </div>
        )
    }
}

export default EventsSingle;