import React from 'react'
import BannerCard from "../banner/banner";
import ProductCard from "../products-sec/product";

function RightSideBar () {
    return(
        <div className="rightSide-component">
        <div className="storeBanner">
          <BannerCard />
        </div>

        <div className="storeFilterNav">
          <div className="filterDetails">
            <div className="filterBox">Filter</div>
            <div className="items">
              <span>13 Items</span>
            </div>
            <div className="sortByCategory">
              <span>sort By</span>
              <span>
                <select>
                  <option>Name</option>
                </select>
              </span>
            </div>
            <div className="sortDisplayItem">
              <span>show</span>
              <span>
                <select>
                  <option>12</option>
                </select>
              </span>
            </div>
          </div>

          <div className="filterIcons">
            <span>Thumb</span>
            <span>List</span>
          </div>
        </div>

        <div className="store-product-container">
          <ProductCard />
        </div>

        <div className="pagination-container">
          <div className="spanText">
            <span>1</span>
            <span>2</span>
            <span className="active">3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
      </div>
    )
}

export default RightSideBar;