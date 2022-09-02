import React from 'react';
import "./cart.scss";
import AppleMacBook from "../../media/Products/Apple Macbook Air.png";
import {useDispatch,useSelector} from 'react-redux';
import {cartAction} from '../../store/index';

function CartItem(props){


    const dispatch = useDispatch();

    let cartDetail = useSelector(state=>state.cart);
    

    const calculateTotalQuantity = ()=>{
        const quantityArr = cartDetail.cart.map((product)=>{
          return product.quantity;
        })
  
        console.log(quantityArr)
      }
      

    const addHandler = ()=>{
        dispatch(cartAction.addProduct(props.prouctDetail))
        calculateTotalQuantity();
    }   
    
    const removeHandler=()=>{
        console.log("clicked remove")
        dispatch(cartAction.removeProduct(props.prouctDetail.id))
    }
    console.log(cartDetail);


    const deleteProduct = ()=>{
        dispatch(cartAction.deleteProduct(props.prouctDetail.id))
    }
    
    return(
        <div className="cart-item-container">
        <div className="cart-item-image-container">

          <div className="cross-box" onClick={deleteProduct}>
            <span className="cross"> <i className="fa fa-times" aria-hidden="true" ></i></span>
          </div>
          <span>
            <img src={props.prouctDetail.imgUrl} alt="#" />
          </span>
        </div>

        <div className="cart-item-details">
          <div className="cart-item-title">{props.prouctDetail.title}</div>

          <div className="cart-mobile-problem">
            <div className="cart-item-price">&#x20B9; {props.prouctDetail.price}</div>

            <div className="cart-item-quantity">

              <div className="quantity-container">
                <span className="bd-right" onClick={removeHandler}>-</span>
                <span>{props.prouctDetail.quantity}</span>
                <span className="bd-left" onClick={addHandler}>+</span>
              </div>
            </div>

            <div className="cart-item-unitPrice">&#x20B9; {props.prouctDetail.totalPrice}</div>
          </div>
        </div>
      </div>
    )
}

export default CartItem;