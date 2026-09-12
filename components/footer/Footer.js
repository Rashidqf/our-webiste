import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import FLoGo from '/public/images/logo.png'
import BrandStarIcon from '../icons/BrandStarIcon'
import Image from 'next/image';

const RYZONIX_SERVICES = Services.slice(0, 6);

const footerInfoLinks = [
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/service' },
    { title: 'Projects', href: '/project' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
];

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const router = useRouter();

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
                            {RYZONIX_SERVICES.map((service) => (
                                <li key={service.Id}>
                                    <Link
                                        onClick={ClickHandler}
                                        href={'/service-single/[slug]'}
                                        as={`/service-single/${service.slug}`}
                                        className={router.pathname === '/service-single/[slug]' && router.query.slug === service.slug ? 'is-active' : ''}
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="shape theme-shape">
                            <BrandStarIcon className="theme-shape__icon" size={120} gradientId="footerBrandStar" />
                        </div>
                    </div>
                    <div className="item fade_bottom">
                        <h2 className="title">Information</h2>
                        <ul>
                            {footerInfoLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        onClick={ClickHandler}
                                        href={link.href}
                                        className={router.pathname === link.href ? 'is-active' : ''}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="item widget-contact fade_bottom">
                        <h2 className="title">RYZONIX</h2>
                        <h3>Remote-first · IT Services &amp; IT Consulting</h3>
                        <h4><a className="theme-link" href="mailto:sales@ryzonix.pro">sales@ryzonix.pro</a></h4>
                        <ul className="widget-social">
                            <li><Link href="https://www.facebook.com/ryzonix.pro" target="_blank" rel="noopener noreferrer" title="Ryzonix on Facebook"><i className="ti-facebook"></i></Link></li>
                            <li><Link href="https://www.instagram.com/ryz0nix/" target="_blank" rel="noopener noreferrer" title="Ryzonix on Instagram"><i className="ti-instagram"></i></Link></li>
                            <li><Link href="https://www.linkedin.com/company/ryzonix/" target="_blank" rel="noopener noreferrer" title="Ryzonix on LinkedIn"><i className="ti-linkedin"></i></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="footer-lower">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-2 col-12">
                            <Link onClick={ClickHandler} href="/" className="logo">
                                <Image src={FLoGo} alt="Ryzonix" className="brand-logo" width={379} height={231} />
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

