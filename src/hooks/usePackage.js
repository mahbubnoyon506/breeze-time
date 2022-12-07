import { useEffect, useState } from 'react';

const usePackage = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://breeze-time-server.vercel.app/packages')
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      });
  }, []);
  return [packages, isLoading];
};

export default usePackage;
