import React, { useState } from 'react';
import DeletePack from './DeletePack';
import UpdatePack from './UpdatePack';

const PackageTable = ({ memberPackage, index, refetch}) => {
    const { _id, name, price } = memberPackage;
    console.log(memberPackage);
// const PackageTable = ({ memberPackage, index, refetch }) => {
//     const { _id, name, price } = memberPackage;
    // console.log(memberPackage);
    const [updatePackage, setUpdatePackage] = useState(null)
    const [deletePackage, setDeletePackage] = useState('')


    return (
        <>
            <tr class="hover">
                <th>{index + 1}</th>
                <th>{name}</th>
                <td>{
                    isNaN(price) ?
                        `${price}` :
                        `$${price}/month`
                }</td>
                <td>
                    <label onClick={() => setUpdatePackage(memberPackage)} for="updatePackage" class="btn btn-outline btn-sm btn-primary">Update</label>
                </td>
                <td>
                    <label onClick={() => setDeletePackage(memberPackage)} for="deletePackage" class="btn btn-outline btn-sm btn-primary">Delete</label>
                </td>
            </tr>
            {
                updatePackage && <UpdatePack
                    updatePackage={updatePackage}
                    setUpdatePackage={setUpdatePackage}
                    refetch={refetch}
                    _id={_id}
                ></UpdatePack>
            }
            {
                deletePackage && <DeletePack
                    deletePackage={deletePackage}
                    setDeletePackage={setDeletePackage}
                    refetch={refetch}
                    _id={_id}
                ></DeletePack>
            }
        </>
    );
};

export default PackageTable;