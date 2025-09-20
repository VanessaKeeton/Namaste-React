import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Content = () => {
  // using json-server for mock data api: json-server --watch db.json --port 4000
  const [restaurants, setRestaurants] = useState([]);
  const [unfilteredRestaurants, setUnfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
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

  const topRatedFilter = () => {
    const restaurantsFiltered = restaurants.filter((restaurant) => restaurant.rating >= 4.6);

    setRestaurants(restaurantsFiltered);
  };

  const searchRestaurants = () => {
    const filteredList = unfilteredRestaurants.filter(
      (rest) =>
        rest.name.toLowerCase().includes(searchText.toLowerCase()) ||
        rest.cuisines.some((cuisine) => cuisine.toLowerCase().includes(searchText.toLowerCase()))
    );

    setRestaurants(filteredList);
  };

  const resetData = () => setRestaurants(unfilteredRestaurants);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="content">
      <div className="filter">
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button type="button" className="filter__button" onClick={searchRestaurants}>
          Search
        </button>
        <button type="button" className="filter__button" onClick={topRatedFilter}>
          Top Rated Restaurants
        </button>
        <button type="button" className="filter__button" onClick={resetData}>
          Clear Filter
        </button>
      </div>
      <div className="restaurants-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Content;
