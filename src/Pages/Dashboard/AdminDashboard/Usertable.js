import React from 'react';
import { toast } from 'react-toastify';

const Usertable = ({ user, index, refetch }) => {
  const { email, role } = user;
  console.log(user);
  // make admin
  const makeAdmin = () => {
    const url = `https://floating-basin-72615.herokuapp.com/users/admin/${email}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You don't have access to make someone admin!!");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('This user is promoted as admin');
          refetch();
        }
      });
  };

  // remove admin

  const removeAdmin = () => {
    const url = `https://floating-basin-72615.herokuapp.com/users/user/${email}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You don't have access to make someone user!!");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('This admin is demoted as user');
          refetch();
        }
      });
  };

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <th>Name</th>
      <td>{email}</td>
      <td>
        {role ? (
          <p className="text-accent">Admin</p>
        ) : (
          <button
            className="btn btn-outline btn-sm btn-primary"
            onClick={makeAdmin}
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role ? (
          <button
            className="btn btn-outline btn-sm btn-primary"
            onClick={removeAdmin}
          >
            Remove Admin
          </button>
        ) : (
          <p className="text-primary">User</p>
        )}
      </td>
    </tr>
  );
};

export default Usertable;
