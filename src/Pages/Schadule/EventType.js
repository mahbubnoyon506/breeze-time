import React from 'react';
import one from '../../assets/meetingType/one_on_one.svg'
import group from '../../assets/meetingType/group.svg'
import collective from '../../assets/meetingType/collective.svg';
import round from '../../assets/meetingType/round_robin.svg'

const EventType = () => {
    return (
        <div>
            <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full">
                <div className="w-full sm:w-1/3 h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800" >

                </div>
                <div className="w-full sm:w-1/3 h-64 shadow bg-white dark:bg-gray-800" >

                </div>
                <div className="w-full sm:w-1/3 h-64 rounded-b sm:rounded-b-none shadow bg-white dark:bg-gray-800" >

                </div>
            </div>
        </div>
    );
};

export default EventType;