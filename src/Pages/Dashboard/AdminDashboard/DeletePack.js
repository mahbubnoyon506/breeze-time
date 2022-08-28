import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeletePack = ({ deletePackage, setDeletePackage, refetch, _id }) => {
  // console.log(deletePackage)
  const { name } = deletePackage;

  const handleDeletePackage = () => {
    axios
      .delete(`http://localhost:5000/packages/${_id}`)
      .then(function (response) {
        if (response.status === 200) {
          toast.success('Package Deleted Successfully ');
        }
      });
    refetch();
    setDeletePackage(null);
  };

  const handleCancelDelete = () => {
    setDeletePackage(null);
  };

  return (
    <div>
      <input type="checkbox" id="deletePackage" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <div>
            <h3 class="text-lg font-bold">
              Do you want to delete{' '}
              <span className="text-bold text-red-500 text-xl ">"{name}"</span>{' '}
              package ?
            </h3>
            <p class="py-4">
              If you delete it will completely delete from database.
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleDeletePackage}
              className="btn btn-tiny btn-accent"
            >
              Delete
            </button>
            <button
              onClick={handleCancelDelete}
              className="btn btn-tiny btn-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePack;
