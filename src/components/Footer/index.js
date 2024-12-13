import './index.css'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Footer = () => {
    return (
       <div className="footer-container">
        <div className="footer-first-cont">
            <div className="subcribe-cont">
                <h2>Be the first to know</h2>
                <p className='details'>Sign up for updates from mettā muse.</p>
                <input placeholder="Enter your e-mail..." />
                <button className='subcribe'>Subcribe</button>
            </div>
            <div className="contact-cont">
                <h2>CONTACT US</h2>
                <p className='details'>+44 221 133 5360</p>
                <p className='details'>customercare@mettamuse.com</p>
                <h2>Currency</h2>
                <h2> <img className='usa' src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1733919718/Flag_of_the_United_States__28DoS_ECA_Color_Standard_29_jstuqa.svg" alt="usa" />  .  USD</h2>
                <p className='details'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr />
        <div className="footer-second-cont">
            <div>
                <h3>mettā muse</h3>
                <p className='details'>About Us</p>
                <p className='details'>Stories</p>
                <p className='details'>Artisans</p>
                <p className='details'>Boutiques</p>
                <p className='details'>Contact Us</p>
                <p className='details'>EU Compliances Docs</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <p className='details'>Orders & Shipping</p>
                <p className='details'>Join/Login as a Seller</p>
                <p className='details'>Payment & Pricing</p>
                <p className='details'>Return & Refunds</p>
                <p className='details'>FAQs</p>
                <p className='details'>Privacy Policy</p>
                <p className='details'>Terms & Conditions</p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <BiLogoInstagramAlt className='icon' />
                <TbBrandLinkedinFilled className='icon' />
                <h3>mettā muse Accepts</h3>
                <div className='payment-cont'>
                    <img className='images' src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1733916064/Google_Pay_Logo_fyo3uo.svg" alt="gpay"/>
                    <img className='images' src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1733918099/1200px-Mastercard_2019_logo.svg_ftn71i.png" alt="master-card"/>
                    <img className='images' src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1733916324/dtvuvsNM_400x400_znjzns.jpg" alt="paypal"/>
                    <p className='images amex'>AMEX</p>
                    <img className='images' src="https://res.cloudinary.com/da3mrj5uf/image/upload/v1733916220/Apple_Pay_logo_fjard2.svg" alt="i-pay"/>
                    <p className='images pay'>Pay</p>
                </div>
            </div>
        </div>
        <p className='details copyrights'> Copyright © 2023 mettamuse. All rights reserved.</p>
       </div>

    )
}

export default Footer