import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <header id="header" >
            <div className={props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-5 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={props.Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} href="/about">About <i className="ti-arrow-top-right"></i></Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/service">Service <i className="ti-arrow-top-right"></i></Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/project">Portfolio <i className="ti-arrow-top-right"></i></Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/blog">Blog <i className="ti-arrow-top-right"></i></Link>
                                        </li>
                                        {/* <li><Link onClick={ClickHandler} href="/contact">Contact Us <i className="ti-arrow-top-right"></i></Link>
                                        </li> */}
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Services <i className="ti-arrow-top-right"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-single/Email-Marketing12">Service Single</Link></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Portfolio <i className="ti-arrow-top-right"></i></Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Portfolio</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-single/Jack-Rose">Portfolio Single</Link></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/blog">Blog <i className="ti-arrow-top-right"></i></Link> */}
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-single/How-To-Teach-Kids-Ramadan-Isn’t-About-Food1">Blog details </Link>
                                                </li>
                                            </ul> */}
                                        {/* </li> */}
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="#">Pages <i className="ti-arrow-top-right"></i></Link>
                                            <ul className="sub-menu"> */}
                                                {/* <li><Link onClick={ClickHandler} href="/team">Team</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} href="/team-single">Team Single</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li> */}
                                                {/* <li><Link onClick={ClickHandler} href="/404">404</Link></li> */}
                                            {/* </ul>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/contact"><span> Contact
                                            us</span>
                                            <i className="ti-arrow-top-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;