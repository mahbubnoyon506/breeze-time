import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event, setDeleteEvent}) => {
    const {eventName, eventType, dateTime, description} = event;
    
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex justify-between'>
                        <h2 class="card-title ">
                            {eventName}
                            <div class="badge badge-secondary">20 min</div>
                        </h2>
                        <button class="btn btn-xs btn-outline btn-primary">Update</button>
                    </div>
                    <div className='flex justify-between'>
                        <p>Event type: {eventType}</p>
                        <p>Event date: {dateTime}</p>
                    </div>
                    <p>Description: {description}</p>
                    <div class="card-actions justify-between">
                        <Link to='' class="btn btn-xs btn-outline btn-primary">Open video</Link>
                        <label onClick={setDeleteEvent(event)} for="event-delete" class="btn btn-xs btn-outline btn-primary">Delete Event</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;