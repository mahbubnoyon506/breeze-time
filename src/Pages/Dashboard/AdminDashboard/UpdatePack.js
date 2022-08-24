import React from 'react';
import { useForm } from 'react-hook-form';

const UpdatePack = ({ updatePackage }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
    };

    console.log(updatePackage)
    return (
        <div>
            <input type="checkbox" id="updatePackage" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Email <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <input {...register("email")} aria-label="enter email adress" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            {errors.email && <small className='text-red-500'>Email is required!!</small>}
                        </div>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Email <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <input {...register("email")} aria-label="enter email adress" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            {errors.email && <small className='text-red-500'>Email is required!!</small>}
                        </div>
                        <div className="mt-8">
                            <input type={'submit'} aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full cursor-pointer" value={'Login'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePack;