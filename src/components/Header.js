import { CDN_IMAGE } from "../utils.js/constants";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={CDN_IMAGE}
        ></img>
      </div>
      <div className="naveItems">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;