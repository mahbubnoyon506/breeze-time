import React, { useState } from 'react';
import PackageUpdateModal from './PackageUpdateModal';

const PackageTable = ({ memberPackage, index, refetch }) => {
    const { _id, name, price, activeEvent, calender, groupEvent, notificationStatus, oneToOne, accessType } = memberPackage;
    // console.log(memberPackage);

    const [openPackageUpdateModal, setOpenPackageUpdateModal] = useState(null)

    const handleUpdatePackage = () => {
        setOpenPackageUpdateModal(' ')
        console.log('clicked update', openPackageUpdateModal)

    }

    const handleDeletePackag = () => {

    }

    return (
        <div>
            <tr class="hover">
                <th>{index + 1}</th>
                <th>{name}</th>
                <td>
                    <ul>
                        <li>Active Event: {activeEvent}</li>
                        <li>Calender: {calender}</li>
                        <li>Group Event: {groupEvent}</li>
                        <li>Notification Status: {notificationStatus}</li>
                        <li>One-To-One: {oneToOne}</li>
                        <li>Access Type: {accessType}</li>
                    </ul>
                </td>

                <td>{
                    isNaN(price) ?
                        `${price}` :
                        `$${price}/month`
                }</td>
                <td>
                    <button /*for='package-update-modal'*/ onClick={handleUpdatePackage} className='btn btn-outline btn-sm btn-primary'>Update Package</button>

                </td>
                <td><button onClick={handleDeletePackag()} className='btn btn-outline btn-sm btn-primary'>Delete Package</button>
                </td>
            </tr >
            {
                openPackageUpdateModal && <PackageUpdateModal
                    setOpenPackageUpdateModal={setOpenPackageUpdateModal}
                ></PackageUpdateModal>
            }
        </div >
    );
};

export default PackageTable;