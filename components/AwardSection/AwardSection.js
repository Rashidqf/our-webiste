import React from 'react';

import Award1 from "/public/images/awards/1.jpg"
import Award2 from "/public/images/awards/2.jpg"
import Award3 from "/public/images/awards/3.jpg"
import start from "/public/images/awards/start.svg"
import Link from 'next/link';
import Image from 'next/image';

const AwardSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="award-section section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="poort-text poort-in-right"><span>Awards & Recognition</span></h2>
                    <div className="poort-text poort-in-right">
                        <h3>Check our <span>awards</span> & achievements</h3>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12  scroll-text-animation" data-animation="fade_from_left">
                        <div className="image">
                            <div className="image-1">
                                <Image src={Award1} alt="" />
                            </div>
                            <div className="image-2">
                                <Image src={Award2} alt="" />
                            </div>
                            <div className="image-3">
                                <Image src={Award3} alt="" />
                            </div>
                            <div className="image-4">
                                <Image src={start} alt="" />
                            </div>
                            <div className="bg-text">
                                <h2 aria-hidden="true">Awwards</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="content">
                            <ul>
                                <li className="scroll-text-animation" data-animation="fade_from_right">
                                    <div className="text">
                                        <span>2012</span>
                                        <h2><Link onClick={ClickHandler} href="#">Awards 2020</Link></h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#"><i className="ti-arrow-top-right"></i></Link>
                                </li>
                                <li className="scroll-text-animation" data-animation="fade_from_right">
                                    <div className="text">
                                        <span>2015</span>
                                        <h2><Link onClick={ClickHandler} href="#">Visionary Minds Award</Link></h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#"><i className="ti-arrow-top-right"></i></Link>
                                </li>
                                <li className="scroll-text-animation" data-animation="fade_from_right">
                                    <div className="text">
                                        <span>2017</span>
                                        <h2><Link onClick={ClickHandler} href="#">Global Innovation</Link></h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#"><i className="ti-arrow-top-right"></i></Link>
                                </li>
                                <li className="scroll-text-animation" data-animation="fade_from_right">
                                    <div className="text">
                                        <span>2019</span>
                                        <h2><Link onClick={ClickHandler} href="#">Delight Star Award</Link></h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#"><i className="ti-arrow-top-right"></i></Link>
                                </li>
                                <li className="scroll-text-animation" data-animation="fade_from_right">
                                    <div className="text">
                                        <span>2022</span>
                                        <h2><Link onClick={ClickHandler} href="#">Outstanding Leadership</Link></h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#"><i className="ti-arrow-top-right"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AwardSection;
