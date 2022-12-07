import React from 'react';
import { Link } from 'react-router-dom';
import team from '../../assets/teams.gif';
const Teams = () => {
  return (
    <div>
      <div className="hero py-5 lg:max-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse md:flex-row-reverse">
          <div className="flex-shrink-0 w-full max-w-lg " data-aos="fade-left">
            <img src={team} alt="" className="rounded" />
          </div>
          <div
            className="text-center text-lg px-16 lg:text-left md:my-5"
            data-aos="fade-right"
          >
            <h1 className="text-5xl font-bold">Schedule for your teams</h1>
            <p className="py-6 ">
              The fastest and easiest way to schedule any meeting or other
              collaboration.
            </p>
            <Link to="/eventtype">
              <button className="btn bg-primary border-none text-white rounded-lg hover:bg-accent ">
                try it for free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
