import React from 'react';

const PackageTable = ({ memberPackage, index, refetch, setUpdatePackage, setDeletePackage}) => {
    const { name, price } = memberPackage;
    console.log(memberPackage);

    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{
                isNaN(price) ?
                    `${price}` :
                    `$${price}/month`
            }</td>
            <td>               
                <label onClick={setUpdatePackage(memberPackage)} for="updatePackage" class="btn btn-outline btn-sm btn-primary">Update</label>
            </td>
            <td>
                <label onClick={setDeletePackage(memberPackage)} for="deletePackage" class="btn btn-outline btn-sm btn-primary">Delete</label>
            </td>
        </tr>
    );
};

export default PackageTable;