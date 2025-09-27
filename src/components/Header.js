import FoodAppLogo from "./FoodAppLogo";
import { Link } from "react-router-dom";

const Header = () => (
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
        <li className="nav-item px-8 py-4">Cart</li>
      </ul>
    </div>
  </div>
)

export default Header;
