import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import Loader from '../../Components/Loader';
import Event from './Event';
import DeleteModal from './DeleteModal';



const DashHome = () => {
    const [events, setEvents] = useState([]);
    const [deleteEvent, setDeleteEvent] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/events')
                .then(function (response) {
                    return response;
                })
            setEvents(data);
            setIsLoading(false)
        })()
    }, [])
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='px-10'>
            <h2 className='text-2xl my-5'>My Schedule Calender</h2>
            <div className='flex justify-between mb-4'>
                <h2 className='text-primary'>John@gmail.com</h2>
                <div className='flex text-primary'>
                    <span className='mr-2'><FaPlus></FaPlus></span>
                    <Link to='/eventtype'>Create New Event</Link>
                </div>
            </div>
            <hr />
            <div className='mt-5 grid grid-cols-3 gap-5'>
                {
                    events.map(event =>
                    <Event key={event._id} event={event} setDeleteEvent={setDeleteEvent}></Event>
                    )
                }
            </div>
            {
                events && <DeleteModal deleteEvent={deleteEvent}></DeleteModal>
            }
        </div>
    );
};

export default DashHome;