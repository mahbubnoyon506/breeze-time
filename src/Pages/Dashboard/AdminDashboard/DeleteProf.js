import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

const deleteProf = ({ deleteProfessional, setDeleteProfessional }) => {
    const { _id, name } = deleteProfessional;

    const handleDelete = () => {

        const url = `https://breeze-time-server.vercel.app/professional/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => {
            console.log(res) 
              return res.json()})
            .then((data) => {
              toast.error('Client Deleted!!')
              setDeleteProfessional('')
            });
    }

    const handleCancel = () => {
        setDeleteProfessional('')
    }
    return (
        <div>
            <input type="checkbox" id="profDelete" className="modal-toggle" />
            <label for="profDelete" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <div className='flex justify-start items-center'>
                        <FiAlertCircle className='text-4xl text-error' />
                        <span className='ml-2'>Are you sure to delete {name}?</span>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button onClick={handleCancel} className="btn btn-sm btn-accent hover:bg-accent mr-2">Cancel</button>
                        <button onClick={handleDelete} className="btn btn-sm btn-primary">Detele</button>
                    </div>
                </label>
            </label>
        </div >
    );
};

export default deleteProf;