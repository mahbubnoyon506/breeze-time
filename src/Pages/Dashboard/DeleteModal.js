import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteEvent, setDeleteEvent, refetch }) => {
    const { _id, eventName, dateTime } = deleteEvent;

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/event/${_id}`)
            .then(function (response) {
                return response;
            })
            toast.success('Event deleted !!');
            setDeleteEvent('')
            refetch()
    }


    return (
        <div>
            <input type="checkbox" id="event-delete" class="modal-toggle" />
            <label for="event-delete" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <h2 className='py-5'>Are you sure to delete {eventName} start at {dateTime}</h2>
                    <div class="flex justify-end">
                        <label for="event-delete" class="btn btn-sm btn-primary mr-3">Cancel</label>
                        <button onClick={handleDelete} class="btn btn-sm btn-error">Delete</button>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default DeleteModal;