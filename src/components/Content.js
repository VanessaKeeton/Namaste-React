import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedFlag } from "./RestaurantCard";
import FilterRestaurants from "./FilterRestaurants";
import { Link } from "react-router-dom";

const Content = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [unfilteredRestaurants, setUnfilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const restaurantListClasses = () => {
    return "restaurants-list mt-4 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8";
  }

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

  const RestaurantCardPromoted = withPromotedFlag(RestaurantCard);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="content mt-2">
      <FilterRestaurants onSearch={searchRestaurants} onFilterTopRated={filterTopRated} onFilterReset={resetData}/>
      <div className={restaurantListClasses()}>
        {restaurants.map((restaurant) => (
          <Link 
            className="
            "
            to={`/restaurant/${restaurant.id}`}
            key={restaurant.id}
          >
            {
              restaurant.promoted
              ? <RestaurantCardPromoted data={restaurant} />
              : <RestaurantCard data={restaurant} />
            }
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
