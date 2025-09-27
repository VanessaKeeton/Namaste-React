const RestaurantCard = (props) => {
  const  { data } = props;
  const { name, cuisines, rating, waitTime, image } = data;
  return (
  <div className="
    restaurant-card
  bg-orange-100
    hover:bg-orange-300
    p-4
  ">
    <h3 className="restaurant-header">{name}</h3>
    <div className="restaurant-cuisines">{cuisines.join(', ')}</div>
    <div className="restaurant-rating">{rating}</div>
    <div className="restaurant-wait-time">{waitTime}</div>
    <div className="food-image">
      <img
        className="image"
        alt={image?.alt}
        src={image?.url}
      />
    </div>
  </div>
)}

export default RestaurantCard;
