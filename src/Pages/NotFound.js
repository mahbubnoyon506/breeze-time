import React from 'react';
import notFoundImg from '../assets/notFound.png'


const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={notFoundImg} alt="Not found" />
        </div>
    );
};

export default NotFound;