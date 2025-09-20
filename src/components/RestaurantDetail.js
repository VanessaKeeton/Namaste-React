import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const RestaurantDetail = () => {
  const { resId } = useParams();
  const [details, setDetails] = useState({});

  const { name = "", cuisines = [], waitTime = "", image = {}, menu = [] } = details;
  const { alt: imgAlt, url: imgUrl } = image;

  const fetchData = async () => {
    const res = await fetch(`http://localhost:4000/restaurants/${resId}`);
    const data = await res.json();
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="restaurant-detail">
      <h1>{name}</h1>
      <p>
        Wait time: {waitTime} | Cuisines: {cuisines.join(", ")}
      </p>
      <div className="food-image">
        <img className="image" alt={imgAlt} src={imgUrl} />
      </div>
      <section>
        <h2>Menu</h2>
        <ul>
          {menu.map(({ name, price, id }) => (
            <li key={id} className="menu-item">
              {`${name} $${price}`}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default RestaurantDetail;
