import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const ProfTable = ({ professional, index, setDeleteProfessional }) => {
    const { name, email, pack, issuedDate} = professional;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{pack}</td>
            <td>{issuedDate}</td>
            <td>
                <label onClick={setDeleteProfessional(professional)} for="profDelete" className="text-primary cursor-pointer hover:text-accent"><FaTrashAlt/></label>
            </td>
        </tr>
    );
};

export default ProfTable;