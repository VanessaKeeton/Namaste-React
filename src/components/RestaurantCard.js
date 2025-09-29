const RestaurantCard = (props) => {
  const  { data } = props;
  const { name, cuisines, rating, waitTime, image } = data;
  return (
  <div className="
    restaurant-card
  bg-orange-100
    hover:bg-orange-300
    p-4
    flex
    flex-col
  ">
    <h3 className="restaurant-header">{name}</h3>
    <div className="restaurant-cuisines">{cuisines.join(', ')}</div>
    <div className="restaurant-rating">{rating}</div>
    <div className="restaurant-wait-time">{waitTime}</div>
    <div className="food-image w-full -order-1">
      <img
        className="image w-full"
        alt={image?.alt}
        src={image?.url}
      />
    </div>
  </div>
)}

export const withPromotedFlag = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="
          absolute
          z-1
          bg-orange-500
          text-white
          px-1.5
          py-0.5
          top-2
          -left-2
          font-bold
          border
          after:absolute
          after:-z-1
          after:w-0
          after:h-0
          after:border-8
          after:border-solid
          after:border-transparent
          after:border-r-orange-500
          after:top-5
          after:-left-2
        ">Promoted</span>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
