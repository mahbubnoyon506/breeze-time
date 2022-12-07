import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Package = ({ p }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { _id, name, price, accessType, activeEvent, calender, goupEvent, notificationStatus, oneToOne } = p;
  const handleAdmin = () => {
    toast.error("Admin can't make payment")
  }
  return (
    <div className="card sm:w-96 mb-5 lg:w-full bg-accent-focus mx-auto hover:rounded-lg hover:bg-accent-content">
      <div className="card-body">
        <h2 className='text-3xl text-center'>{name}</h2>
        {
          price === 'Free' ?
            <h3 className='text-lg text-center'>{price}</h3>
            :
            <h3 className='text-lg text-center'>${price}/Month</h3>
        }
        <div className='flex flex-row items-center'>
          <FaCheckCircle className="mr-3 text-xl text-primary-focus" />
          <span>Calender access: {calender}</span>
        </div>
        <div className='flex flex-row items-center'>
          <FaCheckCircle className="mr-3 text-xl text-primary-focus" />
          <span>Group Event: {goupEvent}</span>
        </div>

        <div className='flex flex-row items-center'>
          <FaCheckCircle className="mr-3 text-xl text-primary-focus" />
          <span>One to One Event: {oneToOne}</span>
        </div>
        <div className='flex flex-row items-center'>
          <FaCheckCircle className="mr-3 text-xl text-primary-focus" />
          <span>Active event: {activeEvent}</span>
        </div>
        <div className='flex flex-row items-center'>
          <FaCheckCircle className="mr-3 text-xl text-primary-focus" />
          <span>Notification: {notificationStatus}</span>
        </div>
        <div className='flex flex-row items-center'>
          <FaCheckCircle className="mr-3 text-xl text-primary-focus" />
          <span>{accessType.slice(0, 30)}...</span>
        </div>
        {
          price === 'Free' ? ''
            :
            (
              admin ?
                <><button onClick={handleAdmin} className='disabled my-3 btn btn-sm bg-transparent border-black text-black rounded-lg hover:bg-secondary-focus hover:border-secondary-focus hover:text-white'>Get started</button></>
                :
                <>
                  <Link to={`/payment/${_id}`} className='m-auto'><button className=' my-3 btn btn-sm bg-transparent border-black text-black rounded-lg hover:bg-secondary-focus hover:border-secondary-focus  hover:text-white'>Get started</button></Link>
                  
                </>
            )
        }
      </div>
    </div>
  );
};

export default Package;