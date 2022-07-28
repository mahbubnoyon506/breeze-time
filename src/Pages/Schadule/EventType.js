import React from 'react';
import one from '../../assets/meetingType/one_on_one.svg'
import group from '../../assets/meetingType/group.svg'
import collective from '../../assets/meetingType/collective.svg';
import round from '../../assets/meetingType/round_robin.svg'
import { Link } from 'react-router-dom';

const EventType = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col container'>
                <div className="mb-12 mt-6 rounded">
                    <div className='flex justify-between px-40'>
                    <Link to='/dash-home' className="btn btn-ghost btn-sm btn-outline btn-primary text-primary">Back</Link>
                    <h2 className='text-2xl text-primary'>New Event Type</h2>
                    </div>
                    <div className="flex flex-wrap sm:flex-no-wrap items-center justify-center w-full h-32  mt-8">
                        <div className="flex justify-center items-center w-28 mr-10 rounded-t sm:rounded-l sm:rounded-t-none" >
                            <img src={one} alt="one-to-one meeting" />
                        </div>
                        <div className="flex justify-start flex-col w-full sm:w-1/3" >
                            <h2 className=' text-left text-xl'>One-ono-One</h2>
                            <p className='text-sm'>Let an invitee pick a time to meet with you.</p>
                        </div>
                        <div className="flex justify-end items-center w-full sm:w-1/3 rounded-b sm:rounded-b-none" >
                            
                            <Link to='/one-to-one' className="btn btn-primary rounded-full btn-sm">Create</Link>
                        </div>
                    </div>
                    {/* group meeting  */}
                    <div className="flex flex-wrap sm:flex-no-wrap items-center justify-center w-full h-32 ">
                        <div className="flex justify-center items-center w-28 mr-10 rounded-t sm:rounded-l sm:rounded-t-none" >
                            <img src={group} alt="one-to-one meeting" />
                        </div>
                        <div className="flex justify-start flex-col w-full sm:w-1/3" >
                            <h2 className=' text-left text-xl'>Group</h2>
                            <p className='text-sm'>Let multiple invitees meet with you at one time.</p>
                        </div>
                        <div className="flex justify-end items-center w-full sm:w-1/3 rounded-b sm:rounded-b-none" >
                        <button className="btn btn-primary rounded-full btn-sm">Create</button>
                        </div>
                    </div>
                    {/* collective meeting  */}
                    <div className="flex flex-wrap sm:flex-no-wrap items-center justify-center w-full h-32 ">
                        <div className="flex justify-center items-center w-28 mr-10 rounded-t sm:rounded-l sm:rounded-t-none" >
                            <img src={collective} alt="one-to-one meeting" />
                        </div>
                        <div className="flex justify-start flex-col w-full sm:w-1/3" >
                            <h2 className=' text-left text-xl'>Collective</h2>
                            <p className='text-sm'>Host an event with another person and let invitees pick a time when you’re all available.</p>
                        </div>
                        <div className="flex justify-end items-center w-full sm:w-1/3 rounded-b sm:rounded-b-none" >
                            <button className="btn btn-primary rounded-full btn-sm">Create</button>
                        </div>
                    </div>
                    {/* round robin meeting  */}
                    <div className="flex flex-wrap sm:flex-no-wrap items-center justify-center w-full h-32 ">
                        <div className="flex justify-center items-center w-28 mr-10 rounded-t sm:rounded-l sm:rounded-t-none" >
                            <img src={round} alt="one-to-one meeting" />
                        </div>
                        <div className="flex justify-start flex-col w-full sm:w-1/3" >
                            <h2 className=' text-left text-xl'>Round Robin</h2>
                            <p className='text-sm'>Create an event that cycles between multiple hosts.</p>
                        </div>
                        <div className="flex justify-end items-center w-full sm:w-1/3 rounded-b sm:rounded-b-none" >
                            <button className="btn btn-primary rounded-full btn-sm">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventType;