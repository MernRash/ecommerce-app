import React from "react";
import './banner.scss';
import BannerPhoto from '../../media/Web/iphone_6_plus.svg'

function BannerCard(){

    return(
        <div className="banner-container">
         <div className="banner-main-container">   
        <div className="banner-text-conatainer">
            <div className="banner-title">
            <span><b>iPhone 6 Plus</b></span>
            </div>
            <div className="banner-text">
                <span>Performance and design. Taken right to the edge.</span>
            </div>

            <div className="banner-button">SHOP NOW</div>
        </div>
        <div className="banner-image-container"><img src={BannerPhoto} alt="bannerPhoto" /></div>
      </div>
        </div>
    )
}

export default BannerCard;