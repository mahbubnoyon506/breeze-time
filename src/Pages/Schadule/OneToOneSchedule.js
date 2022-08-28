import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const OneToOneSchedule = () => {
  const [user] = useAuthState(auth);
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
      targetedEmail: data.targetedEmail,
      dateTime: value,
      host: user.email,
    };
    axios
      .post('http://localhost:5000/events', eventValue)
      .then(function (response) {});
    toast.success('Event created Successfully ');
    reset();
  };
  //   axios
  //     .post('http://localhost:5000/', eventValue)
  //     .then(function (response) {
  //       console.log(response);
  //     });
  //   toast.success('Event created Successfully ');
  //   reset();
  // }
  return (
    <div>
      <div className="flex justify-between px-20 my-5">
        <Link
          to="/eventtype"
          className="btn btn-ghost btn-sm btn-outline outline-primary text-primary"
        >
          Back
        </Link>
        <h2 className="text-2xl text-primary">Add One to One Event</h2>
      </div>
      <div className="border-2 mx-20 p-5">
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
            {errors.event && <p>Event type is required.</p>}
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
            <p className="text-error text-xs">{errors.description?.message}</p>
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
                className="btn btn-outline  my-5 btn-primary w-32"
                type="submit"
                value="Create Event"
              />
            </div>
            {/*   <div className="border-2 mx-20 p-5">
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
                    <p className="text-error text-xs">
                      Event type is required.
                    </p>
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
                  {errors.event && <p>Event type is required.</p>}
                  <label className="label">
                    <span className="label-text">Tageted Email</span>
                  </label>
                  <input
                    {...register('targetedEmail', { required: true })}
                    type="email"
                    placeholder="Type targeted email here"
                    className="input input-bordered w-full"
                  />
                  {errors.targetedEmail && (
                    <p className="text-error text-xs">
                      Targeted email is required.
                    </p>
                  )}
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
                      className="btn btn-outline  my-5 btn-primary w-32"
                      type="submit"
                      value="Create Event"
                    />
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OneToOneSchedule;
