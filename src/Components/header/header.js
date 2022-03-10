import React from "react";
import "./header.scss";
import profile_pic from "../../media/Web/profile_icon.svg";
import addCart from "../../media/Web/bag_icon.svg";
import { Link } from "react-router-dom";


function Header(props) {


  return (
    <div className="header-container">
      <div className="language-container">
        <span id="Language">
          <select>
            <option>EN</option>
          </select>
        </span>

        <span id="Currency">
          <select>
            <option>$</option>
          </select>
        </span>
      </div>

      <div className="user-information-container">
        <div className="myProfile">
          <span>
            <img src={profile_pic} alt="profile_pic"></img>
          </span>
          &nbsp;
          <span>My Profile</span>
        </div>

        <div className="add-to-cart">
        <span>
           <Link onClick={props.cartClass} to="/cart"> <img src={addCart} alt="bag_icon"></img></Link>
          </span>
          &nbsp;
          <span>2 Items</span>
        </div>
      </div>
    </div>
  );
}

export default Header;