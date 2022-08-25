import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Loader from '../../../Components/Loader';
import DeletePack from './DeletePack';
import PackageTable from './PackageTable';
import UpdatePack from './UpdatePack';

const ManagePackages = () => {
    const [updatePackage, setUpdatePackage] = useState('')
    const [deletePackage, setDeletePackage] = useState('')


    const { data, isLoading,  refetch } = useQuery(['packages'], () =>
    fetch('http://localhost:5000/packages', {
        method : 'GET',
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json()
    )
  )
    if(isLoading){
        return <Loader></Loader>
    }
    
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Package</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( (memberPackage, index) => <PackageTable key={memberPackage._id} memberPackage={memberPackage} index={index} refetch={refetch} setUpdatePackage={setUpdatePackage} setDeletePackage={setDeletePackage}></PackageTable>)
                        }
                    </tbody>
                </table>
                {
                    updatePackage && <UpdatePack updatePackage={updatePackage}></UpdatePack>
                }
                {
                   deletePackage && <DeletePack deletePackage={deletePackage}></DeletePack> 
                }
            </div>
        </div>
    );
};

export default ManagePackages;