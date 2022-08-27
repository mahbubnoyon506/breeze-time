import React, { useEffect, useState } from 'react';

const ProfessionalCollection = () => {
  const [professional, setProfessional] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/professional')
      .then((res) => res.json())
      .then((data) => setProfessional(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `http://localhost:5000/professional/${id}`;
      fetch(url, {
        method: 'DELETE',
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
            {professional.map((data, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.package}</td>
                <td>{data.issuedDate}</td>
                <td>
                  <button onClick={() => handleDelete(data._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfessionalCollection;
