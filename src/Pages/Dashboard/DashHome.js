import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Loader from "../../Components/Loader";
import Event from "./Event";
import DeleteModal from "./DeleteModal";
import UpdateEvent from "./UpdateEvent";
import { useQuery } from '@tanstack/react-query'


const DashHome = () => {
  const [deleteEvent, setDeleteEvent] = useState(null);
  const [updateEvent, setUpdateEvent] = useState(null);


  const { data: events, isLoading,  refetch } = useQuery(['events'], () =>
    fetch('https://floating-basin-72615.herokuapp.com/events', {
      method : 'GET',
      headers : {
        'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res =>
     res.json()
    )
  )

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="px-10">
      <h2 className="text-2xl my-5">My Schedule Calender</h2>
      <div className="flex justify-between mb-4">
        <h2 className="text-primary">John@gmail.com</h2>
        <div className="flex text-primary">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          <Link to="/eventtype">Create New Event</Link>
        </div>
      </div>
      <hr />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 my-5  ">
        {events.map((event) => (
          <Event
            key={event._id}
            event={event}
            setDeleteEvent={setDeleteEvent}
            setUpdateEvent={setUpdateEvent}
          ></Event>
        ))}
      </div>
      {deleteEvent && <DeleteModal deleteEvent={deleteEvent} setDeleteEvent={setDeleteEvent} refetch={refetch}></DeleteModal>}

      {updateEvent && (
        <UpdateEvent
          updateEvent={updateEvent}
          setUpdateEvent={setUpdateEvent}
          refetch={refetch}
        ></UpdateEvent>
      )}
    </div>
  );
};

export default DashHome;
