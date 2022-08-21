import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader';
import PackageTable from './PackageTable';

const ManagePackages = () => {
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
                            <th>Package Details</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( (memberPackage, index) => <PackageTable key={memberPackage._id} memberPackage={memberPackage} index={index} refetch={refetch}></PackageTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePackages;