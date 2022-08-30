import axios from 'axios';
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateEvent = ({ updateEvent, setUpdateEvent, refetch }) => {
  const { _id } = updateEvent;
  const [value, onChange] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const eventValue = {
      eventName: data.eventname,
      eventType: data.event,
      description: data.description,
      dateTime: value,
    };
    axios
      .put(
        `https://floating-basin-72615.herokuapp.com/event/${_id}`,
        eventValue
      )
      .then(function (response) {
        console.log(response);
      });
    toast.success('Event updated Successfully ');
    reset();
    setUpdateEvent('');
    refetch();
  };

  return (
    <div>
      <input type="checkbox" id="updateEvent" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="updateEvent"
            className="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="border-2 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Event Name</span>
                </label>

                <input
                  {...register('eventname', { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                {errors.eventname && (
                  <p className="text-error text-xs">Event type is required.</p>
                )}
                <label className="label">
                  <span className="label-text">Event Options</span>
                </label>
                <select
                  className="select select-bordered"
                  {...register('event', { required: true })}
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>In Person Meeting</option>
                  <option>Phone Call</option>
                  <option>Google Meet</option>
                </select>

                <label className="label">
                  <span className="label-text">Type Event Description</span>
                </label>
                <textarea
                  {...register('description', {
                    required: 'Description is required.',
                  })}
                  className="textarea textarea-bordered h-24"
                  placeholder="Description"
                ></textarea>
                <p className="text-error text-xs">
                  {errors.description?.message}
                </p>
                <label className="label">
                  <span className="label-text">Select Date</span>
                </label>
                <DateTimePicker
                  onChange={onChange}
                  value={value}
                  disableClock={true}
                />

                <div className="flex justify-end">
                  <input
                    className="btn btn-outline mt-5 btn-primary btn-sm w-32"
                    type="submit"
                    value="Update Event"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default UpdateEvent;
