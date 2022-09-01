import React from "react";
import './footer.scss';
import WesternUnion from '../../media/Web/Western_union.svg';
import Visa from '../../media/Web/visa.svg';
import MasterCard from '../../media/Web/master_card.svg';
import Paypal from '../../media/Web/Paypal.svg';
import facebook from '../../media/Web/facebook.svg';
import twitter from '../../media/Web/twitter.svg';
import ishop from '../../media/Web/ishop.svg';

function Footer(){
    return(
        <div className="footer-container">
            <div className="social-container">
                <div className="ishop-container">
                    <span><img src={ishop} alt="iShop"></img></span>
                    <span><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer. </p></span>
                </div>

                <div className="followUs-container">
                    <span><h3>Follow Us</h3></span>
                    <span><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p></span>
                    <div className="followUs-icon-container">
                        <span><img src={facebook} alt="facebook"></img></span>
                        <span><img src={twitter} alt="twitter"></img></span>
                    </div>
                </div>

                <div className="contactUs-container">
                    <div><h3>Contact Us</h3></div>
                    <div>
                        <p>iShop: address @building 124</p> 
                        <p>Call us now: 0123-456-789</p>
                        <p>Email: support@whatever.com</p>
                    </div>
                </div>
            </div>

            <div className="info-container">
                

                <div className="about-container">
                <div><h3>Information</h3></div>
                <div className="list-Styling">
                    <ul>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    </ul>
                    
                    </div>
                </div>

                <div className="about-container">
                <div><h3>Service</h3></div>
                <div>
                    <ul>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    </ul>
                    
                    </div>
                </div>

                <div className="about-container">
                <div><h3>Extras</h3></div>
                <div>
                    <ul>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    </ul>
                    
                    </div>
                </div>

                <div className="about-container">
                <div><h3>My Account</h3></div>
                <div>
                    <ul>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    </ul>
                    
                    </div>
                </div>

                <div className="about-container">
                <div><h3>Userful Links</h3></div>
                <div>
                    <ul>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    </ul>
                    
                    </div>
                </div>
                <div className="about-container">
                <div><h3>Our Offers</h3></div>
                <div>
                    <ul>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    </ul>
                    
                    </div>
                </div>
            </div>

            <div className="payment-container">
                <div className="image-container">
                    <span><img src={WesternUnion} alt="Western_Union"></img></span>
                    <span><img src={MasterCard} alt="Master_Card"></img></span>
                    <span><img src={Paypal} alt="Paypal"></img></span>
                    <span><img src={Visa} alt="Visa"></img></span>

                </div>
            </div>
        </div>
    )
}

export default Footer;