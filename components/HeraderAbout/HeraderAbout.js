import React, { useState } from 'react';

import Abouti from '/public/images/btn-about.png';
import logo from '/public/images/logo-2.svg';


const HeraderAbout = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
        closeProfile();
    }

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };
    const closeProfile = () => {
        setIsProfileOpen(false);
    };

    return (

        <div className="mini-cart">
            <button className="cart-toggle-btn" onClick={toggleProfile}>
                <img src={Abouti} alt="" />
            </button>
            <div className={`mini-cart-content ${isProfileOpen ? 'mini-cart-content-toggle' : ""}`}>
                <button className="mini-cart-close"><i className="ti-close" onClick={closeProfile}></i></button>
                <div className="mini-cart-items">
                    <a href="index.html"><img src={logo} alt="" /></a>
                    <h2>Get in Touch</h2>
                    <p>
                        Ryzonix—IT Services &amp; IT Consulting. Reach out for custom web development, MVPs, SaaS, or mobile projects.
                    </p>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="contact">
                            <span>Website</span>
                            <h6><a href="https://www.ryzonix.com" target="_blank" rel="noopener noreferrer">ryzonix.com</a></h6>
                        </div>
                    </div>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-email"></i>
                        </div>
                        <div className="contact">
                            <span>Email Now</span>
                            <h6><a href="mailto:contact@ryzonix.com">contact@ryzonix.com</a></h6>
                        </div>
                    </div>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-placeholder"></i>
                        </div>
                        <div className="contact">
                            <span>Location</span>
                            <h6>Remote-first · Worldwide</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeraderAbout;

