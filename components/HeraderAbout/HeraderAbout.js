import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '../../lib/seo/site';

import Abouti from '/public/images/btn-about.png';
import logo from '/public/images/logo.png';


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
                <img src={Abouti.src || Abouti} alt="Open contact panel" />
            </button>
            <div className={`mini-cart-content ${isProfileOpen ? 'mini-cart-content-toggle' : ""}`}>
                <button className="mini-cart-close"><i className="ti-close" onClick={closeProfile}></i></button>
                <div className="mini-cart-items">
                    <Link href="/" onClick={ClickHandler} className="mini-cart-logo">
                        <Image src={logo} alt="Ryzonix" className="brand-logo" width={379} height={231} />
                    </Link>
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
                            <h6><a href={`${SITE.url}/`} target="_blank" rel="noopener noreferrer">ryzonix.pro</a></h6>
                        </div>
                    </div>
                    <div className="mini-cart-item">
                        <div className="icon">
                            <i className="flaticon-email"></i>
                        </div>
                        <div className="contact">
                            <span>Email Now</span>
                            <h6><a href={`mailto:${SITE.email}`}>{SITE.email}</a></h6>
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
