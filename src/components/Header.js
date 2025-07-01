import { useState } from "react";
import { CDN_IMAGE } from "../utils.js/constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState("login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={CDN_IMAGE}></img>
      </div>
      <div className="naveItems">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="logIn-button"
            onClick={() => {
              loginButton === "login"
                ? setLoginButton("logout")
                : setLoginButton("login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
