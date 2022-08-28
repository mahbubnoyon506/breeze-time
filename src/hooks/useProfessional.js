import { useEffect, useState } from 'react';

const useProfessional = (user) => {
  const [professional, setProfessional] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(
        `http://localhost:5000/professional/${email}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProfessional(data.professional);
          setLoading(false);
        });
    }
  }, [user]);
  return [professional, loading];
};
export default useProfessional;
