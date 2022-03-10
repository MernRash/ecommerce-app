import React from 'react'
import BestSellerNav from '../bestSeller-sec/bestSellerNav'
import ProductCard from '../products-sec/product'
import BannerCard from '../banner/banner'
// import Navbar from '../navbar-sec/navbar';
import ServiceComp from '../services-sec/service'
import NavCover from '../navbar-cover/navbar-cover'

function Home () {
    return(
      <div className="home-container">
        
        <NavCover />
        <BestSellerNav />
        <ProductCard />
        <BannerCard />
        <ServiceComp />
      </div>
    )
}

export default Home;