import FoodAppLogo from "./FoodAppLogo";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <FoodAppLogo />
    </div>
    <div className="nav">
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
)

export default Header;
