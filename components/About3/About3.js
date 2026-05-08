import React from 'react'
import Link from 'next/link'
import CountUp from 'react-countup';
import Abarrow from '/public/images/ab-arrow.png';
import RollingText from '../RollingText/RollingText';
import Image from 'next/image';

const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



    return (
        <section className="about-section-s3 section-padding">
            <div className="container">
                <div className="wraper">
                    <div className="top-content">
                        <div className="left scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="left-content">
                                <i className="ti-arrow-top-right"></i>
                                <p>Make your business
                                    prosper with our great
                                    team of experts. We’ll
                                    make your.</p>
                                <h3>1.8<span>x</span></h3>
                            </div>
                            <Image src={Abarrow} alt="" />
                        </div>
                        <div className="right scroll-text-animation" data-animation="fade_from_right">
                            <h2>We provide brilliant idea
                                to grow the <span>startup —
                                    agency</span> with your sharp
                                brand.</h2>
                        </div>
                    </div>
                    <div className="bottom-content scroll-text-animation" data-animation="fade_from_bottom">
                        <p>Consumers today rely heavily on digital means to
                            research products. We research a brand of bldend
                            engaging with it, according to the meanwhile, 51%
                            of consumers</p>
                        <Link onClick={ClickHandler} href="/contact" className="theme-btn">
                            <RollingText text={"Contact us"}/>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                    <div className="funfact-wrap scroll-text-animation" data-animation="fade_from_bottom">
                        <div className="item">
                            <h2><span><CountUp end={22} enableScrollSpy /></span><span className="icon">+</span></h2>
                            <p>We helped to get companies</p>
                        </div>
                        <div className="item">
                            <h2><span><CountUp end={15} enableScrollSpy /></span><span className="icon">M</span></h2>
                            <p>We helped to get companies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;