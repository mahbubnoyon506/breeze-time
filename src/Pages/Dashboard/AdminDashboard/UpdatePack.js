import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdatePack = ({ updatePackage, setUpdatePackage, refetch, _id }) => {
  const { register, handleSubmit } = useForm();

  // console.log(updatePackage)
  const onSubmit = async (data) => {
    axios
      .put(`http://localhost:5000/packages/${_id}`, data)
      .then(function (response) {
        if (response.status === 200) {
          toast.success('Package updated Successfully ');
        }
      });
    refetch();
    setUpdatePackage(null);
  };
  const handleCancelUpdate = () => {
    setUpdatePackage(null);
  };

  return (
    <div>
      <input type="checkbox" id="updatePackage" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl text-primary font-bold text-center mb-4">
              Update Package <span>{updatePackage.name}</span>
            </h2>
            {/* accessType */}
            <label
              onClick={handleCancelUpdate}
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
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
            {/* <div className='mt-8 flex justify-center'> */}
            <input
              type={'submit'}
              aria-label="create my account"
              className=" w-full btn focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-primary border rounded hover:bg-indigo-600 py-4 cursor-pointer"
              value={'Update'}
            />

            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePack;
