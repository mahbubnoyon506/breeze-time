import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddPackage = ({ addPackageRefetch, setAddPackage }) => {
  const { register, handleSubmit } = useForm();

  // console.log(updatePackage)
  const onSubmit = async (data) => {
    axios
      .post(`https://breeze-time-server.vercel.app/packages`, data)
      .then(function (response) {
        if (response.status === 200) {
          toast.success('Package updated Successfully ');
        }
      });
    addPackageRefetch();
    setAddPackage(null);
  };
  const handleCancelAddPackage = () => {
    setAddPackage(null);
  };

  return (
    <div>
      <input type="checkbox" id="addPackage" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-primary font-bold text-center mb-4">
              Add Package
            </h2>
            {/* accessType */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                accessType{' '}
              </lable>
              <input
                {...register('accessType')}
                aria-label="enter accessType"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* activeEvent */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                activeEvent{' '}
              </lable>
              <input
                {...register('activeEvent')}
                aria-label="enter activeEvent"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* calender */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                Calender{' '}
              </lable>
              <input
                {...register('calender')}
                aria-label="enter calender number"
                type="number"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* goupEvent */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                goupEvent{' '}
              </lable>
              <input
                {...register('goupEvent')}
                aria-label="enter goupEvent"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* name */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                name{' '}
              </lable>
              <input
                {...register('name')}
                aria-label="enter name"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* notificationStatus */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                notificationStatus{' '}
              </lable>
              <input
                {...register('notificationStatus')}
                aria-label="enter notificationStatus adress"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* oneToOne */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                oneToOne{' '}
              </lable>
              <input
                {...register('oneToOne')}
                aria-label="enter oneToOne adress"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            {/* price */}
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800 relative">
                price{' '}
              </lable>
              <input
                {...register('price')}
                aria-label="enter price adress"
                type="number"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-8 flex justify-between">
              <input
                type={'submit'}
                aria-label="create my account"
                className=" btn focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-primary border rounded hover:bg-indigo-600 py-4 cursor-pointer"
                value={'Add'}
              />
              <button
                onClick={handleCancelAddPackage}
                className="btn focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-accent border rounded hover:bg-indigo-600 py-4 cursor-pointer "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
