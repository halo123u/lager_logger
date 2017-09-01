import React from 'react';
import { Link } from 'react-router-dom';

const ViewEvent = (props) => {
    return (
        //calender
        <div className='box event'>
            <h4>{props.events.event_name}</h4>
            <p>{props.events.date_info}</p>
            <p>{props.events.addition_info}</p>
        </div>
    )
}

export default ViewEvent;