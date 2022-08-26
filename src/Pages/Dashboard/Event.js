import React from 'react';

const Event = ({ event, setDeleteEvent, setUpdateEvent, setStartCall }) => {
  const { eventName, eventType, dateTime, description } = event;

  return (
    <div>
      <div className="card w-96 bg-base-100 hover:bg-accent-focus shadow-xl ">
        <div className="card-body">
          <div className="flex justify-between pb-5">
            <h2 className="card-title ">{eventName}</h2>
            <label
              for="updateEvent"
              onClick={setUpdateEvent(event)}
              className="btn btn-xs btn-outline btn-primary"
            >
              Update Event
            </label>
          </div>
          <div className="flex justify-between">
            <p>Event type: {eventType}</p>
            <p>Event date: {dateTime}</p>
          </div>
          <p>Description: {description}</p>
          <div className="card-actions justify-between pt-5">
            {/* <Link to='' className="btn btn-xs btn-outline btn-primary">Start Meeting</Link> */}
            <label
              onClick={setStartCall(event)}
              for="meetingOpen"
              className="btn btn-xs btn-outline btn-primary"
            >
              Join Meeting
            </label>
            <label
              onClick={setDeleteEvent(event)}
              for="event-delete"
              className="btn btn-xs btn-outline btn-error"
            >
              Delete Event
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
