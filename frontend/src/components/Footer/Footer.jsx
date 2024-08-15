import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                 <img src={assets.logo}/>
                 <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quia eligendi. Possimus dolorum tenetur neque deserunt eius optio magnam molestias autem at unde nobis corrupti a distinctio iure totam enim, necessitatibus officiis hic amet odio explicabo magni quos cumque. Doloribus. </p>
                 <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                 </div>
                </div>
                <div className='footer-content-center'>
                     <h2>COMPANY</h2>
                     <ul>
                        <li> Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Ploicy</li>
                     </ul>
                </div>
                <div className='footer-content-right'>
                    <h2> GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9546469865</li>
                        <li>k.suraj1715@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024 Tomato.com - All Right Reserve.</p>
        </div>
    
    )
}

export default Footer
