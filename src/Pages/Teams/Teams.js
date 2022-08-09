import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/calanderimg.jpg'
const Teams = () => {
  return (
    <div>
      <div class="hero  bg-white py-5 lg:max-h-screen">
        <div class="hero-content flex-col  lg:flex-row-reverse md:flex-row-reverse">
          <div class="flex-shrink-0 w-full max-w-lg " data-aos="fade-left">
            <img src={image} alt="" className='rounded' />
          </div>
          <div class="text-center text-lg px-5 lg:text-left md:my-5" data-aos="fade-right">
            <h1 class="text-5xl font-bold">Schedule for your teams</h1>
            <p class="py-6 ">The fastest and easiest way to schedule any meeting or other collaboration.</p>
            <Link to='/eventtype'><button className='btn bg-primary border-none text-white rounded-lg hover:bg-accent '>try it for free</button></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Teams;