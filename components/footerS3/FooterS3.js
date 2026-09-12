import React, { useState } from 'react';
import Services from '../../api/Services';
import Link from 'next/link';
import Submitbtn from '/public/images/widget-search-btn.svg';
import Shape from '/public/images/f-shape.png';
import Image from 'next/image';
import BrandGearIcon from '../icons/BrandGearIcon';

const FooterS3 = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        // Simple email validation regex pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous error message
        setError('');

        // Check if the email is valid
        if (!email) {
            setError('Email is required.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setEmail('');
        }
    };
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="footer-section-s3 section-padding pb-0">
            <div className="footer-topbar">
                <div className="container">
                    <div className="wraper">
                        <h2 className="scroll-text-animation">
                            <span>Start a project</span> <br /> write us at <span className="color">
                                sales@ryzonix.pro</span>
                        </h2>
                        <Link onClick={ClickHandler} href="/contact" className="topbar-btn scroll-text-animation btn-wrapper btn-move"
                            data-animation="fade_from_bottom">contact
                            <br />
                            me
                            <div className="shape theme-shape">
                                <BrandGearIcon className="theme-shape__icon" size={175} gradientId="footerS3Gear" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer">
                    <div className="item widget-newsletter fade_bottom">
                        <h2 className="title">NEWSLETTER</h2>
                        <div className="newsletter">
                            <form onSubmit={handleSubmit} className="form-fild">
                                <input
                                    className="fild"
                                    type="email"
                                    placeholder="Get News & Updates"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {error && <p className="error-message">{error}</p>} {/* Display error if present */}
                                <button type="submit">
                                    <Image src={Submitbtn} alt="Submit" />
                                </button>
                                <div className="terms">
                                    <input type="checkbox" id="checkbox" className="checkbox-input" />
                                    <label htmlFor="checkbox" className="checkbox-label">
                                        <span className="custom-checkbox"></span>I agree to all your terms
                                        and policies</label>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="item fade_bottom">
                        <h2 className="title">Quick Link</h2>
                        <ul>
                            {Services.slice(0, 5).map((service, Sitem) => (
                                <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="item fade_bottom">
                        <h2 className="title">Contact info</h2>
                        <ul>
                            <li>Ryzonix</li>
                            <li>Remote-first · Worldwide</li>
                            <li><a href="https://www.ryzonix.pro">www.ryzonix.pro</a></li>
                            <li><a href="mailto:sales@ryzonix.pro">sales@ryzonix.pro</a></li>
                            <li>IT Services &amp; IT Consulting</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-lower">
                <div className="container">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-5 col-12">
                            <p className="copyright">Copyright &copy; <span>{new Date().getFullYear()}</span> Ryzonix. All rights reserved.</p>
                        </div>
                        <div className="col-lg-3 col-12 text-center">
                            <p>Saturday - Thursday</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className="widget-social">
                                <li><Link href="https://www.facebook.com/ryzonix.pro" target="_blank" rel="noopener noreferrer" title="Ryzonix on Facebook"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="https://www.instagram.com/ryz0nix/" target="_blank" rel="noopener noreferrer" title="Ryzonix on Instagram"><i className="ti-instagram"></i></Link></li>
                                <li><Link href="https://www.linkedin.com/company/ryzonix/" target="_blank" rel="noopener noreferrer" title="Ryzonix on LinkedIn"><i className="ti-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="f-shape">
                <Image src={Shape} alt="" />
            </div>
        </footer>
    );
};

export default FooterS3;