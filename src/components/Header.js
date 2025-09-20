import FoodAppLogo from "./FoodAppLogo";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <FoodAppLogo />
    </div>
    <div className="nav">
      <ul className="nav-items">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about-us">About Us</Link></li>
        <li className="nav-item"><Link to="/contact-us">Contact Us</Link></li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
)

export default Header;
