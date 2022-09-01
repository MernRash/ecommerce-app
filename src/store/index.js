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
        state.cart.push(updateProd);

      }else{

        /* if exists in cart return index number*/
        let existingProduct = state.cart.findIndex((data)=>{
          return data.id===action.payload.id;
        })


        if(existingProduct<0){
          /* if item not exist then it will increase the qunatity of item. */
          let updateProd = {...action.payload}
          updateProd.quantity++;
          state.cart.push(updateProd );
        }else{

          /* if item is available it will not push just update the quantity. */
          let updateProd = {...action.payload}
          updateProd.quantity = state.cart[existingProduct].quantity + 1;
          state.cart[existingProduct] = updateProd;
        }


        console.log(existingProduct);
      }
      
    },

    removeProduct(id){
      console.log("remove product")
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