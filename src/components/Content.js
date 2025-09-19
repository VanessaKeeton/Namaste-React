import { useState, useEffect } from 'react';
import RestaurantCard from "./RestaurantCard";

const Content = () => {

  // using json-server for mock data api: json-server --watch db.json --port 4000
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div className="content">
    <div className="search">Search</div>
    <div className="restaurants-list">
       {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </div>
    </div>
  )
}

export default Content;
