import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/calanderimg.jpg'
const Teams = () => {
    return (
        <div>
        <div class="hero  bg-base-200 py-5 lg:max-h-screen">
          <div class="hero-content flex-col  lg:flex-row-reverse md:flex-row-reverse">
            <div class="flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
  
              <img src={image} alt="" className='rounded' />
            </div>
            <div class="text-center text-lg px-5 lg:text-left md:my-5">
              <h1 class="text-5xl font-bold">Schedule for your teams</h1>
              <p class="py-6 ">The fastest and easiest way to schedule any meeting or other collaboration.</p>
              <Link to='/login'><button className='btn bg-orange-600 border-none text-white rounded-lg hover:bg-orange-500 '>try it for free</button></Link>
            </div>
  
          </div>
        </div>
      </div>
    );
};

export default Teams;