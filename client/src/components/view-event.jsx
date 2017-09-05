import React from 'react';
import { Link } from 'react-router-dom';

const ViewEvent = (props) => {
    return (
        <div>
        <div className='box event'>
            <h4>{props.events.event_name}</h4>
            <p>{props.events.date_info}</p>
            <p>{props.events.additional_info}</p>
            <Link to={`/events/${props.events.event_id}`}>See More</Link>
        </div>
        </div>
    )
}

export default ViewEvent;