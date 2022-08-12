import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Usertable = ({ user, index, refetch }) => {
    const { _id, email, role } = user;
    console.log(user);
    const makeAdmin = () => {
        const url = `http://localhost:5000/users/admin/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                   if(res.status === 403){
                       toast.error("You don't have access to make someone admin!!")
                   }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    toast.success("This user is promoted as admin")
                    refetch()
                }
            })
    }

    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <th>Name</th>
            <td>{email}</td>
            <td>
                {
                    role ? <p className='text-success'>Admin</p> : 
                    <button className='btn btn-outline btn-sm btn-primary' onClick={makeAdmin}>Make Admin</button>
                }
            </td>
            <td><button className='btn btn-outline btn-sm btn-primary'>Make Admin</button></td>
        </tr>
    );
};

export default Usertable;