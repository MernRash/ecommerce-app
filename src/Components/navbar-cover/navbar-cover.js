import React from "react";
import NavbarCoverPhoto from "../../media/miscellaneous/2_corousel.png";
import './navbar-cover.scss';

function NavCover(){
    return(
        <div className="navbar-cover-image">
        <img src={NavbarCoverPhoto} alt="NavbarCoverPhoto" />
      </div>
    )
}

export default NavCover;