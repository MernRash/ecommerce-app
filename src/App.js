
import './App.scss';
import { Route, Routes } from "react-router-dom"
import Header from './Components/header/header';
import Footer from './Components/footer-sec/footer';
import Navbar from './Components/navbar-sec/navbar';
import Home from './Components/home-sec/home';
import StoreComp from './Components/store-sec/storeComp';
import CartProduct from './Components/cart-sec/cart';
// import Login from './Components/GetStarted/login';
// import NavCover from './Components/navbar-cover/navbar-cover';
function App() {
  return (
    <div className="App">
       <Header />
       <Navbar />
       {/* <NavCover /> */}
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/store" element={<StoreComp />} />
          <Route exact path="/cart" element={<CartProduct />} />
          {/* <Route exact path="/get-started" element = {<Login />} /> */}
       </Routes>

       {/* <CartProduct /> */}
       <Footer />
    </div>
  );
}

export default App;





// link of prepbytes ecommerce project 
// https://xd.adobe.com/view/972a876e-7ecc-4dc8-8c97-5829b7b2edb2-c279/
