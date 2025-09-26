import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterRestaurants from "./FilterRestaurants";
import { Link } from "react-router-dom";

const Content = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [unfilteredRestaurants, setUnfilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAndSetData = async () => {
    setLoading(true)
    const res = await fetch("http://localhost:4000/restaurants");
    const data = await res.json();
    setRestaurants(data);
    setUnfilteredRestaurants(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  const filterTopRated = () => {
    const restaurantsFiltered = restaurants.filter((restaurant) => restaurant.rating >= 4.6);

    setRestaurants(restaurantsFiltered);
  };

  const searchRestaurants = (searchText) => {
    const filteredList = unfilteredRestaurants.filter(
      (rest) =>
        rest.name.toLowerCase().includes(searchText.toLowerCase()) ||
        rest.cuisines.some((cuisine) => cuisine.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    setRestaurants(filteredList);
  };

  const resetData = () => setRestaurants(unfilteredRestaurants);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="content">
      <FilterRestaurants onSearch={searchRestaurants} onFilterTopRated={filterTopRated} onFilterReset={resetData}/>
      <div className="restaurants-list">
        {restaurants.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
            <RestaurantCard data={restaurant} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
