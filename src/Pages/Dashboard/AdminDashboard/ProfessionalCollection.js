import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Components/Loader.js';
import {getProfessionals} from '../../../redux/features/professionalsSlice.js';
import ProfTable from './ProfTable.js';
import DeleteProf from './DeleteProf.js';


const ProfessionalCollection = () => {
  const [deleteProfessional, setDeleteProfessional] = useState('');

  const {professionals, isLoading} = useSelector((state) => state.professionals);
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getProfessionals())
  }, [dispatch])

  if(isLoading){
    return <Loader/>
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Issued Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((professional, index) => <ProfTable key={professional._id} professional={professional} setDeleteProfessional={setDeleteProfessional} index={index}></ProfTable>
            )}
          </tbody>
        </table>
        {
          deleteProfessional && <DeleteProf deleteProfessional={deleteProfessional} setDeleteProfessional={setDeleteProfessional}></DeleteProf>
        }
      </div>
    </div>
  );
};

export default ProfessionalCollection;
