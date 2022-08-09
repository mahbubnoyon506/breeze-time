import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from '../../assets/3958832.jpg'
import AOS from 'aos';

const Banner = () => {

  return (
    <div>
      <div class="hero bg-white py-5 lg:max-h-screen">
        <div class="hero-content flex-col  lg:flex-row-reverse md:flex-row-reverse">
          <div class="flex-shrink-0 w-full max-w-lg" data-aos="fade-left">
            <img src={bannerimage} alt="" className='rounded' />
          </div>
          <div class="text-center text-lg px-5 lg:text-left md:my-5" data-aos="fade-right">
            <h1 class="text-5xl font-bold">Wants to Scheduled?</h1>
            <p class="py-6 ">The fastest and easiest way to schedule any meeting or other collaboration.</p>
            <Link to=''><button className='btn bg-primary border-none text-white rounded-lg hover:bg-accent '>Get started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;