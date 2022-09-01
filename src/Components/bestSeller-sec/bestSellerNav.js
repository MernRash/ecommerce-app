import React from 'react'
import './bestSellerNav.scss'
function BestSellerNav () {
    return(
      <div className="BestSellerNav-cont">
          <div className="bestSeller-heading">
              <h1>BEST SELLER</h1>
          </div>
          <div className="bestSeller-navlinks">
             <span>All</span>
             <span>Mac</span>
             <span>Iphone</span>
             <span>Ipad</span>
             <span>Ipod</span>
             <span>Accessories</span>
          </div>
      </div>
    )
}

export default BestSellerNav;