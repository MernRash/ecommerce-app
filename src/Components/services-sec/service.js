import React from "react";
import "./service.scss";
import shippingPhoto from '../../media/Web/shipping.svg'
import refundPhoto from '../../media/Web/refund.svg'
import supportPhoto from '../../media/Web/support.svg'

function ServiceComp() {
  return (
    <div className="service-container">
      <div className="service-boxes box1">
        <div className="service-box-icon">
            <img src={shippingPhoto} alt="shippingPhoto" />
        </div>
        <div className="service-box-title"><b>FREE SHIPPING</b></div>
        <div className="service-box-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </div>
      </div>
      <div className="service-boxes box2">
        <div className="service-box-icon">
            <img src={refundPhoto} alt="refundPhoto" />
        </div>
        <div className="service-box-title"><b>100% REFUND</b></div>
        <div className="service-box-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </div>
      </div>
      <div className="service-boxes box3">
        <div className="service-box-icon">
             <img src={supportPhoto} alt="supportPhoto" />
        </div>
        <div className="service-box-title"><b>SUPPORT 24/7</b></div>
        <div className="service-box-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur
        </div>
      </div>
    </div>
  );
}

export default ServiceComp;
