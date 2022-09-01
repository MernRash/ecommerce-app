import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import IshopLogo from "../../media/Web/Logo-ISHOP.svg";
// import NavbarCoverPhoto from "../../media/miscellaneous/navbarCoverphoto.png";
import Header from '../header/header'
function Navbar() {
  const [hoverOfstore, setDoHover] = useState(false);
  const toggleHover = () => setDoHover(!hoverOfstore);
  const [isMobile, setIsMobile] = useState(false);
  


  return (
    <div className="navbar-container">
        <div className="logo-button-container">
      <div className="ishop-Logo">
       <Link to={'/'}> <img src={IshopLogo} alt="Ishop Logo" /></Link>
      </div>
      <div className={isMobile ? "navbar-Ul-Li-mobile" : "navbar-Ul-Li" }>
        <Header cartClass={isMobile? ()=>setIsMobile(!isMobile):null} />
        <ul>
          <li onClick={isMobile? ()=>setIsMobile(!isMobile):null}><Link to={'/'}>HOME</Link> </li>
          <li onClick={isMobile? ()=>setIsMobile(!isMobile):null} onMouseEnter={toggleHover}><Link to={'/store'}>STORE</Link></li>
          <li onClick={isMobile? ()=>setIsMobile(!isMobile):null}>IPHONE</li>
          <li onClick={isMobile? ()=>setIsMobile(!isMobile):null}>IPAD</li>
          <li onClick={isMobile? ()=>setIsMobile(!isMobile):null}><Link to={'/store'}>ACCESSORIES</Link></li>
          {/* <li onClick={isMobile? ()=>setIsMobile(!isMobile):null}><Link to={'/get-started'}>Get Started</Link></li> */}
        </ul>
      </div>

      <button onClick={()=>setIsMobile(!isMobile)}><i className={isMobile? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i></button>
      </div>

      <div
        className={hoverOfstore ? "storeHover" : "storeNoDisplay"}
        onMouseLeave={toggleHover}
      >
        <div className="accesories-cont">
          <div className="accesories-heading">
            <h3>Accessories</h3>
          </div>
          <div className="accesories-list">
            <span>AirPort & Wireless</span>
            <span>AppleCare</span>
            <span>Bags, Shells & Sleeves</span>
            <span>Business & Security</span>
            <span>Cables & Docks</span>
            <span>Cameras & Video</span>
            <span>Car & Travel</span>
            <span>Cases & Films</span>
          </div>
        </div>
        <div className="accesories-cont">
          <div className="accesories-heading">
            <h3>Category</h3>
          </div>
          <div className="accesories-list">
            <span>Charging Devices</span>
            <span>Connected Home</span>
            <span>Device Care</span>
            <span>Display & Graphic</span>
            <span>Fitness & Sport</span>
            <span>Headphones</span>
            <span>HealhKit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
