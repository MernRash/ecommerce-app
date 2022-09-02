/* import { createStore } from "redux";
import {useNavigate} from 'react-router-dom'

const isLoggedIn = false;

const rootReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case "login":
      if (action.data == null) {
        return state;
      } else {
        let loggedIn = !state;
        return loggedIn;
      }

    case "logOut":
      if (action.data == null) {
        let logOut = !state;
        return logOut;
      } else {
        return state;
      }


      case "addProduct":
        if(action.data=="addFromCategory"){
          // let navigate = useNavigate();
          // navigate("/cart")
        }

    default:
      return state;
  }
};

export const store = createStore(rootReducer); */

/* React Redux tool Kit  */

import { createSlice,configureStore } from "@reduxjs/toolkit";

let initialState = {
  cart:[],
  totalPrice:0,
  totalQuantity:0,

}

const calculateTotalPrice = (state,action)=>{
  state.totalPrice = state.cart.map(prod=>{
    return prod.totalPrice;
  }).reduce((prev,next)=>{
    return prev + next;
  },0);

  state.totalQuantity = state.cart.map(prod=>{
    return prod.quantity;
  }).reduce((prev,next)=>{
    return prev + next;
  },0);

}





const cartSlice= createSlice({
  name:"cart",
  initialState:initialState,
  reducers:{
    addProduct(state,action){

      /* It checks if any product in cart is available or not. */
      if(state.cart.length<1){


        let updateProd = {...action.payload}
        updateProd.quantity++;
        updateProd.totalPrice = updateProd.price*updateProd.quantity;
        state.cart.push(updateProd);

        calculateTotalPrice(state,action);


        
        

      }else{
        /* if exists in cart return index number*/
        let existingProduct = state.cart.findIndex((data)=>{
          return data.id===action.payload.id;
        })


        if(existingProduct<0){
          /* if item not exist then it will increase the qunatity of item. */
          let updateProd = {...action.payload}
          updateProd.quantity++;
          updateProd.totalPrice = updateProd.price*updateProd.quantity;
          state.cart.push(updateProd );
          calculateTotalPrice(state,action);
        }else{

          /* if item is available it will not push just update the quantity. */
          let updateProd = {...action.payload}
          updateProd.quantity = state.cart[existingProduct].quantity + 1;
          updateProd.totalPrice = updateProd.price*updateProd.quantity;
          state.cart[existingProduct] = updateProd;

          calculateTotalPrice(state,action);
        }


        console.log(existingProduct);
      }
      
    },

    removeProduct(state,action){
      console.log("reached redux")
      let existingProduct = state.cart.findIndex((data)=>{
        return data.id===action.payload;
      })


      if(state.cart[existingProduct].quantity>0){
        
        state.cart[existingProduct].quantity--;
        state.cart[existingProduct].totalPrice = state.cart[existingProduct].price*state.cart[existingProduct].quantity;
        calculateTotalPrice(state,action);
      }

      if(state.cart[existingProduct].quantity === 0){
        console.log(state.cart)
        //state.cart = state.cart;
        state.cart.splice(existingProduct,1);
     }
    },

    deleteProduct(state,action){
      let existingProduct = state.cart.findIndex((data)=>{
        return data.id===action.payload;
      })
      state.cart.splice(existingProduct,1);

      calculateTotalPrice(state,action);

    }
  }
})




const store = configureStore({
  reducer:{
    cart:cartSlice.reducer
  }
})

export const cartAction = cartSlice.actions;
export default store;