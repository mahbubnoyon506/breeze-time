import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Loader from '../../../Components/Loader';
import AddPackage from './AddPackage';
import PackageTable from './PackageTable';

import { BsPlusLg } from 'react-icons/bs';

const ManagePackages = () => {
  const [addPackage, setAddPackage] = useState(null);

  const { data, isLoading, refetch } = useQuery(['packages'], () =>
    fetch('https://floating-basin-72615.herokuapp.com/packages', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loader></Loader>;
  }

  const addPackageRefetch = () => {
    refetch();
  };

  return (
    <div>
      {' '}
      <div className="flex items-center justify-between mx-8">
        <h2 className="text-2xl my-5 text-center">Packages</h2>
        <label
          onClick={() => setAddPackage(data)}
          for="addPackage"
          className=""
        >
          <div className="flex items-center cursor-pointer  ">
            <BsPlusLg className="mr-2 "></BsPlusLg>
            <p className="text-lg">Create Packages</p>
          </div>
        </label>
      </div>
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
            {data.map((memberPackage, index) => (
              <PackageTable
                key={memberPackage._id}
                memberPackage={memberPackage}
                index={index}
                refetch={refetch}
              ></PackageTable>
            ))}
          </tbody>
        </table>
        {addPackage && (
          <AddPackage
            addPackageRefetch={addPackageRefetch}
            setAddPackage={setAddPackage}
          ></AddPackage>
        )}
      </div>
    </div>
  );
};

export default ManagePackages;
