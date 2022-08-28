import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const usePackageId = () => {
  const { id } = useParams();
  const [pack, setPack] = useState(id);
  useEffect(() => {
    const url = `http://localhost:5000/packages/${id}`;
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPack(data);
      });
  }, [id]);
  return [pack];
};
export default usePackageId;
