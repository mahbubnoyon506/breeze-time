import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteEvent }) => {
  const { _id, eventName, dateTime } = deleteEvent;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/event/${_id}`)
      .then(function (response) {
        return response;
      });
    toast.success('Event deleted !!');
  };

  return (
    <div>
      <input type="checkbox" id="event-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h2 className="py-5">
            Are you sure to delete {eventName} start at {dateTime}
          </h2>
          <div className="flex justify-end">
            <label
              htmlFor="event-delete"
              className="btn btn-sm btn-primary mr-3"
            >
              Cancel
            </label>
            <button onClick={handleDelete} className="btn btn-sm btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
