import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import useFetchRestaurantById from '../utils/useFetchRestaurantById';

const RestaurantDetail = () => {
  const { resId } = useParams();

  const { details, error } = useFetchRestaurantById(resId);
  const { name, waitTime, cuisines, imageAlt, imageUrl, menu, id: restId } = details;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem({...item, restId}));
  }

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
          {menu.map((item) => {
            const { name, price, id } = item;
            return (
              <li key={id} className="menu-item">
                {`${name} $${price}`} <button type="button" className="px-4 py-2 bg-green-400 cursor-pointer" onClick={() => handleAddItem(item)}>Add</button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default RestaurantDetail;
