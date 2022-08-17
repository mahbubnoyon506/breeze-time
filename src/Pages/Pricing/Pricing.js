import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import Package from './Package';
import usePackage from '../../hooks/usePackage';

const Pricing = () => {

   const {data, isLoading, refetch} = useQuery(['packages'], () => 
    fetch('packages.json')  
   .then(res => res.json())
   )

   if(isLoading) {
    return <Loader></Loader>
   }


  return (

    <div className="lg:mx-16 md:mx-8 sm:mx-3 mb-12">
      <h1 className="text-2xl lg:text-4xl font-bold justify-center flex my-8 lg:my-16">
        Monthly Pricing
      </h1>
      <div className="">
        <div className="lg:grid lg:grid-cols-3 gap-4 ">
            {
              data.map( (p) => <Package p={p}></Package>)
            }
        </div>
      </div>
    </div>
  );
};

export default Pricing;