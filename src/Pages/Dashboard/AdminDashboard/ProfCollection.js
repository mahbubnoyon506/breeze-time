import React, { useEffect, useState } from 'react';


const ProfCollection = () => {



const [professional , setProfessional] = useState([])
useEffect(()=>{
    fetch('https://floating-basin-72615.herokuapp.com/professional')
    .then(res=> res.json())
    .then(data => setProfessional(data))
} ,[])


const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure you want to delete?");
  if (proceed) {
    const url = `https://floating-basin-72615.herokuapp.com/professional/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const remaining = professional.filter((item) => item._id !== id);
        setProfessional(remaining);
      });
  }
};
return (
<div>
<div class="overflow-x-auto">
<table class="table w-full">
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>Email</th>
     <th>Status</th>
   </tr>
 </thead>
 <tbody>
   {professional.map((data, index) => (
     <tr>
       <th>{index}</th>
       <td>{data.name}</td>
       <td>{data.email}</td>
       <td>{data.status}</td>
       <td>
         <button onClick={() => handleDelete(data._id)}>
           Delete
         </button>
         
       </td>
     </tr>
   ))}
 </tbody>
</table>
</div>
</div>
    );
};

export default ProfCollection;