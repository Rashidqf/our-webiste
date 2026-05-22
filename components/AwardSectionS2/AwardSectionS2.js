import React, { useState } from 'react';
import Link from 'next/link';
import AwordImg from '/public/images/awards/4.jpg'
import AwordItem1 from '/public/images/awards/item-01.jpg'
import AwordItem2 from '/public/images/awards/item-02.jpg'
import AwordItem3 from '/public/images/awards/item-03.jpg'
import AwordItem4 from '/public/images/awards/item-04.jpg'
import AwordItem5 from '/public/images/awards/item-05.jpg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const AwardSectionS2 = () => {



    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };
    

    return (
        <section className="award-section-s2 section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animation" data-animation="fade_from_bottom">4.our awwards</h2>
                    <div className="title-bottom">
                        <h3 className="scroll-text-animation" data-animation="fade_from_bottom">our acheivment</h3>
                        <Link onClick={ClickHandler} href="/about" className="scroll-text-animation" data-animation="fade_from_bottom"> <span className="rolling-text">More about us</span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12  scroll-text-animation" data-animation="fade_from_left">
                        <div className="image">
                            <Image src={AwordImg} alt="" />
                                <div className="mid-text">
                                    <h2>awwards</h2>
                                    <span>awwards</span>
                                </div>
                                <div className="circle-content">
                                    <div className="rotate-anm">
                                        <svg viewBox="0 0 100 100">
                                            <defs>
                                                <path id="circle7" d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0" />
                                            </defs>
                                            <text>
                                                <textPath xlinkHref="#circle7">
                                                    - Digital World - Digital World
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="arrows">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                                            <g clipPath="url(#clip0_193_4697)">
                                                <path
                                                    d="M24.9507 0.800781H21.3494L21.3073 18.47L8.38306 5.50394L5.37461 8.47006L18.4678 21.0971H0.926025V24.6564H18.1294L5.7143 37.0293L8.84972 39.8259L21.3073 27.453V45.1225H24.9507V27.453L37.0699 39.8259L39.7394 37.2411L27.4789 24.6564H45.2903V21.0971H27.4789L40.036 8.80899L37.3666 5.97002L24.9507 18.0463V0.800781Z"
                                                    fill="var(--theme, #3B8F63)" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_193_4697">
                                                    <rect width="44.8572" height="44.8571" fill="white"
                                                        transform="translate(0.622803 0.623047)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="content">
                            <ul>
                                <li
                                    className={`scroll-text-animation awward-item ${activeIndex === 0 ? 'active' : ''}`}
                                    onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(0)}
                                    data-animation="fade_from_right"
                                >
                                    <div className="text">
                                        <span>2012</span>
                                        <h2>
                                            <Link onClick={ClickHandler} href="#">
                                                Awards 2020
                                            </Link>
                                            <span>X2</span>
                                        </h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#">
                                        <i className="ti-arrow-top-right"></i>
                                    </Link>
                                    <div className="image-item">
                                        <Image src={AwordItem1} alt="Award 2012" />
                                    </div>
                                </li>
                                <li
                                    className={`scroll-text-animation awward-item ${activeIndex === 1 ? 'active' : ''}`}
                                    onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(1)}
                                    data-animation="fade_from_right"
                                >
                                    <div className="text">
                                        <span>2015</span>
                                        <h2>
                                            <Link onClick={ClickHandler} href="#">
                                                Visionary Minds Award
                                            </Link>
                                            <span>X2</span>
                                        </h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#">
                                        <i className="ti-arrow-top-right"></i>
                                    </Link>
                                    <div className="image-item">
                                        <Image src={AwordItem2} alt="Award 2015" />
                                    </div>
                                </li>
                                <li
                                    className={`scroll-text-animation awward-item ${activeIndex === 2 ? 'active' : ''}`}
                                    onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(2)}
                                    data-animation="fade_from_right"
                                >
                                    <div className="text">
                                        <span>2017</span>
                                        <h2>
                                            <Link onClick={ClickHandler} href="#">
                                                Global Innovation
                                            </Link>
                                            <span>X2</span>
                                        </h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#">
                                        <i className="ti-arrow-top-right"></i>
                                    </Link>
                                    <div className="image-item">
                                        <Image src={AwordItem3} alt="Award 2017" />
                                    </div>
                                </li>
                                <li
                                    className={`scroll-text-animation awward-item ${activeIndex === 3 ? 'active' : ''}`}
                                    onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(3)}
                                    data-animation="fade_from_right"
                                >
                                    <div className="text">
                                        <span>2019</span>
                                        <h2>
                                            <Link onClick={ClickHandler} href="#">
                                                Delight Star Award
                                            </Link>
                                            <span>X2</span>
                                        </h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#">
                                        <i className="ti-arrow-top-right"></i>
                                    </Link>
                                    <div className="image-item">
                                        <Image src={AwordItem4} alt="Award 2019" />
                                    </div>
                                </li>
                                <li
                                    className={`scroll-text-animation awward-item ${activeIndex === 4 ? 'active' : ''}`}
                                    onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(4)}
                                    data-animation="fade_from_right"
                                >
                                    <div className="text">
                                        <span>2022</span>
                                        <h2>
                                            <Link onClick={ClickHandler} href="#">
                                                Outstanding Leadership
                                            </Link>
                                            <span>X2</span>
                                        </h2>
                                    </div>
                                    <Link onClick={ClickHandler} href="#">
                                        <i className="ti-arrow-top-right"></i>
                                    </Link>
                                    <div className="image-item">
                                        <Image src={AwordItem5} alt="Award 2022" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardSectionS2;