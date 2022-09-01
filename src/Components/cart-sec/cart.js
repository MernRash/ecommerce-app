import React, { useState } from "react";
import "./cart.scss";
import AppleMacBook from "../../media/Products/Apple Macbook Air.png";
import { Button } from "@material-ui/core";

function CartProduct() {

  const [increment,setIncrement] = useState(0);


  return (
    <div className="cart-product-container">
      <div className="cart-nav-container">
        <div className="nav-product-heading">
          <span>Product</span>
        </div>
        <div className="nav-product-details">
          <span>PRICE</span>
          <span>QTY</span>
          <span>UNIT PRICE</span>
        </div>
      </div>

      <div className="cart-item-container">
        <div className="cart-item-image-container">

          <div className="cross-box">
            <span className="cross"> <i className="fa fa-times" aria-hidden="true"></i></span>
          </div>
          <span>
            <img src={AppleMacBook} alt="#" />
          </span>
        </div>

        <div className="cart-item-details">
          <div className="cart-item-title">Title Name</div>

          <div className="cart-mobile-problem">
            <div className="cart-item-price">Price</div>

            <div className="cart-item-quantity">

              <div className="quantity-container">
                <span className="bd-right" onClick={()=>setIncrement((prev)=> prev <= 0 ? prev : prev - 1 )}>-</span>
                <span>{increment}</span>
                <span className="bd-left" onClick={()=>setIncrement((prev)=> prev+1)}>+</span>
              </div>
            </div>

            <div className="cart-item-unitPrice">Unit Price</div>
          </div>
        </div>
      </div>

      <div className="cart-checkout-container">
        <div className="promo-code-container">
          <div className="promo-code">
            <span><input type="text" name="promo-code"  placeholder="Enter Promo Code"></input></span>
            <span><Button>Redeem</Button></span>
          </div>
        </div>

        <div className="cart-billing-details">
          <div className="shipping-details">
            <div className="subtotal-box shipping-detail-boxes">
              <span>Subtotal</span>
              <span>998</span>
            </div>
            <div className="shipping-box shipping-detail-boxes">
              <span>Shipping Fee</span>
              <span>20</span>
            </div>
            <div className="coupon-box shipping-detail-boxes">
              <span>Coupon</span>
              <span>No</span>
            </div>
          </div>


          <div className="total-checkout">

            <div className="total-container">
              <span>TOTAL</span>
              <span>1018</span>
            </div>
            <div className="checkout-box">
              <Button>Check Out</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
