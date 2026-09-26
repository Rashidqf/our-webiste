import React from 'react';
import Link from 'next/link';
import footetlogo from '/public/images/f-logo.svg'
import Image from 'next/image';
import { SITE } from '../../lib/seo/site';



const FooterS2 = () => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="footer-section-s2">
            <div className="container">
                <div className="footer-topbar">
                    <h2 className="splittext-line">get in touch</h2>
                    <div className="topbar-button btn-wrapper">
                        <Link onClick={ClickHandler} href="/contact" className="theme-btn button--stroke btn-move" data-block="button">
                            <span className="button__spotlight"></span>
                            Contact us</Link>
                    </div>
                </div>
                <div className="footer">
                    <div className="left-widget">
                        <div className="widget-contact">
                            <div className="title">
                                <h2>{SITE.name} <i className="ti-arrow-down"></i></h2>
                                <p>{SITE.locationLabel} · IT Services &amp; IT Consulting
                                    <br /><a href={`${SITE.url}/`}>www.ryzonix.pro</a></p>
                            </div>
                            <h3><a href={`mailto:${SITE.email}`}>{SITE.email}</a></h3>
                        </div>
                        <div className="widget-contact">
                            <div className="title">
                                <h2>Founded 2025 <i className="ti-arrow-down"></i></h2>
                                <p>Web Development · Tech Consulting · Startup MVPs · SaaS · Mobile App</p>
                            </div>

                            <Image src={footetlogo} alt="" />
                        </div>
                    </div>
                    <div className="right-widget">
                        <div className="contact-map">
                            <h3>Remote service area</h3>
                            <p>{SITE.locationLabel}. There is no public office location listed on this site.</p>
                            <Link href="/karachi">Software development services for Karachi teams</Link>
                        </div>
                        <nav className="f-menu">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/service" className="rolling-text">SERVICES</Link></li>
                                <li><Link onClick={ClickHandler} href="/project" className="rolling-text">WORK</Link></li>
                                <li><Link onClick={ClickHandler} href="/blog" className="rolling-text">INSIGHTS</Link></li>
                                <li><Link onClick={ClickHandler} href="/about" className="rolling-text">ABOUT</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact" className="rolling-text">CONTACT</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="footer-lower">
                    <div className="container">
                        <div className="row align-items-center g-0">
                            <div className="col-lg-5 col-12">
                                <p className="copyright">Copyright &copy; <span>{new Date().getFullYear()}</span> {SITE.name}. All rights reserved.</p>
                            </div>
                            <div className="col-lg-3 col-12">
                                <p>{SITE.locationLabel}</p>
                            </div>
                            <div className="col-lg-4 col-12">
                                <ul className="widget-social">
                                    <li><Link href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" title="Ryzonix on Facebook"><i className="ti-facebook"></i></Link></li>
                                    <li><Link href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" title="Ryzonix on Instagram"><i className="ti-instagram"></i></Link></li>
                                    <li><Link href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" title="Ryzonix on LinkedIn"><i className="ti-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterS2;