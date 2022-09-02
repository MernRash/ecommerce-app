import React, { useState } from "react";
import "./cart.scss";
// import AppleMacBook from "../../media/Products/Apple Macbook Air.png";
import { Button } from "@material-ui/core";
import CartItem from './cartItem';
import {useSelector} from 'react-redux';

let cartList;

function CartProduct() {

  // const [increment,setIncrement] = useState(0);
    let productList = useSelector(state => state.cart);
    
    if(productList.cart.length){
      cartList = productList.cart.map((item,index)=>{
        console.log(item)
        return(
          <CartItem key={item.id}  prouctDetail = {item} />
        )
      });
    }else{
      cartList = <p>No Item in Cart</p>
    }
   
  return (
    <div className="cart-product-container">
      <div className="cart-nav-container">
        <div className="nav-product-heading">
          <span>Product</span>
        </div>
        <div className="nav-product-details">
          <span>PRICE</span>
          <span>QTY</span>
          <span>Total PRICE</span>
        </div>
      </div>

    
    {cartList}
      
 
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
              <span>{productList.totalPrice}</span>
            </div>
            <div className="shipping-box shipping-detail-boxes">
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>
            <div className="coupon-box shipping-detail-boxes">
              <span>Coupon</span>
              <span>No</span>
            </div>
          </div>


          <div className="total-checkout">

            <div className="total-container">
              <span>TOTAL</span>
              <span>&#x20B9; {productList.totalPrice}</span>
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
