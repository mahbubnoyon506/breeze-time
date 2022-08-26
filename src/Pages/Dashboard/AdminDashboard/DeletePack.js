import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeletePack = ({ deletePackage, setDeletePackage, refetch, _id }) => {
    // console.log(deletePackage)
    const { name } = deletePackage;

    const handleDeletePackage = () => {
        axios.delete(`https://floating-basin-72615.herokuapp.com/packages/${_id}`)
            .then(function (response) {
                if (response.status === 200) {
                    toast.success('Package Deleted Successfully ')
                }
            })
        refetch();
        setDeletePackage(null)
    }

    const handleCancelDelete = () => {
        setDeletePackage(null)
    }

    return (
        <div>
            <input type="checkbox" id="deletePackage" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div>
                        <h3 className="text-lg font-bold">Do you want to delete <span className='text-bold text-red-500 text-xl '>"{name}"</span> package ?</h3>
                        <p className="py-4">If you delete it will completely delete from database.</p>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={handleDeletePackage} className="btn btn-tiny btn-accent">Delete</button>
                        <button onClick={handleCancelDelete} className="btn btn-tiny btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePack;