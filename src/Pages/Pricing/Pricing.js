import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="lg:mx-16 md:mx-8 sm:mx-3 mb-12">
      <h1 className="text-2xl lg:text-4xl font-bold justify-center flex my-8 lg:my-16">
        Monthly Pricing
      </h1>

      <div className="cards ">
        <div className="card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 ">
          {" "}
          <div class="card  mx-auto bg-accent-focus hover:rounded-lg hover:bg-accent-content ">
            <div class="card-body">
              <h2 className='text-3xl'>Free</h2>
              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Unlimited users</span>
              </div>


              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Email reminders</span>
              </div>

              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Unlimited Event Create</span>
              </div>

              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Unlimited Meetings</span>
              </div>
              <Link to='' className='m-auto'><button className=' my-3 btn bg-transparent border-black text-black rounded-lg hover:bg-secondary-focus hover:border-secondary-focus  hover:text-white'>Get started</button></Link>
              <p className='m-auto'>
                No credit card needed
              </p>
            </div>
          </div>
          <div class="card  mx-auto bg-accent-focus hover:rounded-lg hover:bg-accent-content ">
            <div class="card-body">
              <h2 className='text-3xl'>Premium</h2>
              <h3 className='text-lg'>$10/Month</h3>
              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>SMS Reminders</span>
              </div>

              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Payments w/ Square, Stripe & PayPal</span>
              </div>

              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Two way calender sync</span>
              </div>


              <Link to='' className='m-auto'><button className=' my-3 btn bg-transparent border-black text-black rounded-lg hover:bg-secondary-focus hover:border-secondary-focus  hover:text-white'>Get started</button></Link>
              <p className='m-auto'>
                No credit card needed
              </p>
            </div>
          </div>
          <div class="card  mx-auto bg-accent-focus hover:rounded-lg hover:bg-accent-content ">
            <div class="card-body">
              <h2 className='text-3xl'>Platinum</h2>
              <h3 className='text-lg'>$20/Month</h3>
              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>SMS reminders

                </span>
              </div>

              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Two-way calendar sync</span>
              </div>

              <div className='flex flex-row items-center'>
                <img
                  className=" w-8"
                  src="https://img.icons8.com/fluency/344/checked.png"
                  alt=""
                />
                <span>Payments w/ Square, Stripe & PayPal</span>
              </div>



              <Link to='' className='m-auto'><button className='my-3 btn bg-transparent border-black text-black rounded-lg hover:bg-secondary-focus hover:border-secondary-focus  hover:text-white'>Get started</button></Link>
              <p className='m-auto'>
                No credit card needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;