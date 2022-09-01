import React,{useContext} from "react";
import './product.scss';
// import Rating from '@mui/material/Rating';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { productContext } from "../context/allProducts";
import ItemContainer from "./item";

function ProductCard(){
/*     const [cartShow,setCartShow] = useState(false)
    const toggleHover = () => setCartShow(!cartShow);

    const showBlock = ()=>{
        document.querySelector(".add-to-cart").style="block";
    }*/    

    const productData = useContext(productContext); 
    return(
        <div className="product-container">

        {
            productData.map((item, index)=>{
                return (
                    <ItemContainer item = {item} key={index}/>
                )
            })
        }
       
       <div className="load-more">
        <span><b>Load More</b></span>
        
       </div>

        </div>
    )
}

export default ProductCard;
