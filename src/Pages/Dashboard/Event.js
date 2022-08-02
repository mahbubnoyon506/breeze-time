import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event, setDeleteEvent, setUpdateEvent}) => {
    const {eventName, eventType, dateTime, description} = event;
    
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex justify-between pb-5'>
                        <h2 class="card-title ">
                            {eventName}
                        </h2>
                        <label for="updateEvent" onClick={setUpdateEvent(event)} class="btn btn-xs btn-outline btn-primary">Update Event</label>
                    </div>
                    <div className='flex justify-between'>
                        <p>Event type: {eventType}</p>
                        <p>Event date: {dateTime}</p>
                    </div>
                    <p>Description: {description}</p>
                    <div class="card-actions justify-between pt-5">
                        <Link to='' class="btn btn-xs btn-outline btn-primary">Start Meeting</Link>
                        <label onClick={setDeleteEvent(event)} for="event-delete" class="btn btn-xs btn-outline btn-error">Delete Event</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;