import { useParams } from "react-router-dom";
import useFetchRestaurantById from '../utils/useFetchRestaurantById';

const RestaurantDetail = () => {
  const { resId } = useParams();

  const { details, error } = useFetchRestaurantById(resId);
  const { name, waitTime, cuisines, imageAlt, imageUrl, menu } = details;

  if (error) return (<h1>Oops! There was an error loading this restaurant.</h1>)

  return (
    <section className="restaurant-detail">
      <h1>{name}</h1>
      <p>
        Wait time: {waitTime} | Cuisines: {cuisines.join(", ")}
      </p>
      <div className="food-image">
        <img className="image" alt={imageAlt} src={imageUrl} />
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
