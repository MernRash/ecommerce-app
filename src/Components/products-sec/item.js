import React,{useState} from "react";
import './product.scss';
import Rating from '@mui/material/Rating';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/index";


const ItemContainer = (props) => {

    const productList = useSelector(state => state.cart);

    console.log(productList);

    // const [cartShow,setCartShow] = useState(false)
    // const toggleHover = () => setCartShow(!cartShow);

    /* dispatch is used to take the click from cart icon */
    const dispatch = useDispatch();

    const addCartHandler = ()=>{
        dispatch(cartAction.addProduct(props.item))
    }


    return (

        <div className="item-container" >
            <div className={"add-to-cart-block"} >
                <div onClick={addCartHandler}>  <i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                <div> <i class="fa fa-heart" aria-hidden="true"></i> </div>
            </div>

            <div>
                <div className="item-image-container"><img src={props.item.imgUrl} alt="item-img"></img></div>
                <div className="item-title-container">
                    <span><b>{props.item.title}</b> <AccessibilityIcon /> </span>
                    <span><Rating name="half-rating-read" defaultValue={props.item.ratings} precision={0.5} /> </span>
                    <span>$499</span>
                </div>
            </div>
        </div>

    )
}


export default ItemContainer;