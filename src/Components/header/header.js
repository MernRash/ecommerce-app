import React from "react";
import "./header.scss";
import profile_pic from "../../media/Web/profile_icon.svg";
import addCart from "../../media/Web/bag_icon.svg";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

function Header(props) {

  let cartDetail = useSelector(state=>state.cart)
  
 

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

        <Link onClick={props.cartClass} to="/cart"> <div className="add-to-cart">
        <span>
            <img src={addCart} alt="bag_icon"></img>
          </span>
          &nbsp;
          <span>{cartDetail.totalQuantity} Items</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;