import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader';
import Usertable from './Usertable';

const ManageUser = () => {

    const { data, isLoading,  refetch } = useQuery(['users'], () =>
    fetch('http://localhost:5000/users', {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( (user, index) => <Usertable key={user._id} user={user} index={index} refetch={refetch}></Usertable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;