import React,{useContext} from "react";
import './product.scss';
import { productContext } from "../context/allProducts";

function ProductCard(){

    const productData = useContext(productContext);
    return(
        <div className="product-container">

        {
            productData.map((item, index)=>{
                return (
                    <div key={index} className="item-container">
                    <div className="item-image-container"><img src={item.imgUrl} alt="item-img"></img></div>
                    <div className="item-title-container">
                        <span><b>{item.title}</b></span>
                        <span>4.5 star</span>
                        <span>$499</span>
                    </div>
                    </div>
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
