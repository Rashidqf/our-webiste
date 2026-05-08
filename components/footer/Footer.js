import React from 'react'
import Link from 'next/link'
import Services from '../../api/Services';
import FLoGo from '/public/images/logo.svg'
import Stert from '/public/images/stert.svg'
import Image from 'next/image';

// images


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    return (
        <footer className={"" + props.hclass}>
            <div className="footer-topbar">
                <div className="container">
                    <div className="wraper splittext-line">
                        <h2>Let’s <span>Work</span></h2>
                        <div className="topbar-button">
                            <div>
                                <Link onClick={ClickHandler} href="/contact" className="theme-btn"> <span className="rolling-text">Contact
                                    us</span> <i className="ti-arrow-top-right"></i></Link>
                            </div>
                            <div>
                                <h2>Together!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer">
                    <div className="item fade_bottom">
                        <h2 className="title">services</h2>
                        <ul>
                            {Services.slice(0, 5).map((service, Sitem) => (
                                <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                            ))}
                        </ul>
                        <div className="shape">
                            <Image src={Stert} alt="" />
                        </div>
                    </div>
                    <div className="item fade_bottom">
                        <h2 className="title">Information</h2>
                        <ul>
                            {Services.slice(0, 5).map((service, Sitem) => (
                                <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="item widget-contact fade_bottom">
                        <h2 className="title">RYZONIX</h2>
                        <h3>Remote-first · IT Services &amp; IT Consulting</h3>
                        <h4><a href="mailto:hello@ryzonix.com">hello@ryzonix.com</a></h4>
                        <ul className="widget-social">
                            <li><Link href="#"><i className="ti-facebook"></i></Link></li>
                            <li><Link href="#"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link href="#"><i className="ti-instagram"></i></Link></li>
                            <li><Link href="#"><i className="ti-linkedin"></i></Link></li>
                            <li><Link href="#"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-lower">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-2 col-12">
                            <Link onClick={ClickHandler} href="/" className="logo">
                                <Image src={FLoGo} alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="footer-nav-list">
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home <i className="ti-arrow-top-right"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About <i className="ti-arrow-top-right"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Services <i className="ti-arrow-top-right"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/project">Projects <i className="ti-arrow-top-right"></i></Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">Blog <i className="ti-arrow-top-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

