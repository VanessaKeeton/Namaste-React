import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import normalizeRestaurantDetails from './normalizeRestaurantDetails';

const useFetchRestaurantById = (resId) => {
  const [details, setDetails] = useState({
    id: -1,
    name: "",
    cuisines: [],
    waitTime: "",
    imageAlt: "",
    imageUrl: "",
    menu: [],
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const result = await useFetch(`http://localhost:4000/restaurants/${resId}`);
      setDetails(normalizeRestaurantDetails(result));
    } catch (err) {
      setError(err.message);
    }
  };

  return {details, error};
}

export default useFetchRestaurantById;
