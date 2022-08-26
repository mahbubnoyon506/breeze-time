import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Loader from "../../Components/Loader";
import Event from "./Event";
import DeleteModal from "./DeleteEvent";
import UpdateEvent from "./UpdateEvent";
import { useQuery } from '@tanstack/react-query'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useProfessional from "../../hooks/useProfessional";
import { toast } from "react-toastify";
import StartMeetingModal from "./StartMeetingModal";



const DashHome = () => {
  const [user] = useAuthState(auth);
  const [professional] = useProfessional(user);
  const [deleteEvent, setDeleteEvent] = useState(null);
  const [updateEvent, setUpdateEvent] = useState(null);
  const [startCall, setStartCall] = useState(null);


  const url = `https://floating-basin-72615.herokuapp.com/event?host=${user.email}`
  const { data: events, isLoading, refetch } = useQuery(['events'], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res =>
      res.json()
    )
  )


  if (isLoading) {
    return <Loader></Loader>;
  }


  const handleEventCreate = () => {
    toast.error('You reached the maximum event creation limit !! Teke a package.')
  }

  return (
    <div className="px-10">
      <h2 className="text-2xl my-5">My Schedule Calender</h2>
      <div className="flex justify-between mb-4">
        <h2 className="text-primary">Host: {user.email}</h2>
        <div className="flex text-primary">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          {
            events?.length >= 5 && !professional ?
              <Link onClick={handleEventCreate} to="/pricing">Create New Event</Link>
              :
              <Link to="/eventtype">Create New Event</Link>
          }
        </div>
      </div>
      <hr />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 my-5  ">
        {events?.map((event) => (
          <Event
            key={event._id}
            event={event}
            setDeleteEvent={setDeleteEvent}
            setUpdateEvent={setUpdateEvent}
            setStartCall={setStartCall}
          ></Event>
        ))}
      </div>
      {deleteEvent &&
        <DeleteModal
          deleteEvent={deleteEvent}
          setDeleteEvent={setDeleteEvent}
          refetch={refetch}>
        </DeleteModal>}

      {updateEvent &&
        <UpdateEvent
          updateEvent={updateEvent}
          setUpdateEvent={setUpdateEvent}
          refetch={refetch}
        ></UpdateEvent>
      }
      {
        startCall &&
        <StartMeetingModal
          startCall={startCall}
          setStartCall={setStartCall}
        ></StartMeetingModal>
      }
    </div>
  );
};

export default DashHome;
