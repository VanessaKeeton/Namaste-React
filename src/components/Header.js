import FoodAppLogo from "./FoodAppLogo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="
      header
      flex
      max-md:flex-col
      max-md:items-center
      md:flex-wrap
      md:justify-between
      md:items-center
    ">
      <div className="logo-container w-full max-w-50 md:w-25">
        <FoodAppLogo />
      </div>
      <div className="nav flex">
        <ul className="nav-items flex max-sm:flex-col gap-4">
          <li className="nav-item px-8 py-4"><Link to="/">Home</Link></li>
          <li className="nav-item px-8 py-4"><Link to="/about-us">About Us</Link></li>
          <li className="nav-item px-8 py-4"><Link to="/contact-us">Contact Us</Link></li>
          <li className="nav-item px-8 py-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <li className="nav-item px-8 py-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
