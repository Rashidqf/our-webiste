import React, { useEffect } from "react";
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RollingText from "../RollingText/RollingText";


import Aboutim1 from '/public/images/about-2.jpg';
import Aboutim2 from '/public/images/about-3.jpg';
import Aboutim3 from '/public/images/about-1.jpg';
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    useEffect(() => {

        const animatedElements = document.querySelectorAll(".new_img-animet");
        animatedElements.forEach((element) => {
            const image = element.querySelector("img");
            if (!image) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "top 50%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.set(element, { autoAlpha: 1 });
            tl.from(element, { xPercent: -100, duration: 1.5, ease: "power2.out" });
            tl.from(image, { xPercent: 100, scale: 1.3, delay: -1.5, ease: "power2.out" });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (

        <section className="about-section-s2">
            <div className="top-img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 scroll-text-animation" data-animation="fade_from_left">
                            <Image src={Aboutim1} alt="" />
                        </div>
                        <div className="col-lg-7 col-12 scroll-text-animation" data-animation="fade_from_right">
                            <Image src={Aboutim2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="circle-content">
                    <div className="rotate-anm">
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <path id="circle1" d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text>
                                <textPath xlinkHref="#circle1">
                                    - Digital World - Digital World
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="arrows">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                            <g clipPath="url(#clip0_193_4691)">
                                <path
                                    d="M24.9507 0.800781H21.3494L21.3073 18.47L8.38306 5.50394L5.37461 8.47006L18.4678 21.0971H0.926025V24.6564H18.1294L5.7143 37.0293L8.84972 39.8259L21.3073 27.453V45.1225H24.9507V27.453L37.0699 39.8259L39.7394 37.2411L27.4789 24.6564H45.2903V21.0971H27.4789L40.036 8.80899L37.3666 5.97002L24.9507 18.0463V0.800781Z"
                                    fill="#EE3736" />
                            </g>
                            <defs>
                                <clipPath id="clip0_193_4691">
                                    <rect width="44.8572" height="44.8571" fill="white"
                                        transform="translate(0.622803 0.623047)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="about-wraper scroll-text-animation" data-animation="fade_from_bottom">
                    <div className="circle-content">
                        <div className="rotate-anm">
                            <svg viewBox="0 0 100 100">
                                <defs>
                                    <path id="circle4" d="
                                            M 50, 50
                                            m -37, 0
                                            a 37,37 0 1,1 74,0
                                            a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text>
                                    <textPath xlinkHref="#circle4">
                                        - Digital World - Digital World
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className="arrows">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <g clipPath="url(#clip0_193_4694)">
                                    <path
                                        d="M24.9507 0.800781H21.3494L21.3073 18.47L8.38306 5.50394L5.37461 8.47006L18.4678 21.0971H0.926025V24.6564H18.1294L5.7143 37.0293L8.84972 39.8259L21.3073 27.453V45.1225H24.9507V27.453L37.0699 39.8259L39.7394 37.2411L27.4789 24.6564H45.2903V21.0971H27.4789L40.036 8.80899L37.3666 5.97002L24.9507 18.0463V0.800781Z"
                                        fill="#EE3736" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_193_4694">
                                        <rect width="44.8572" height="44.8571" fill="white"
                                            transform="translate(0.622803 0.623047)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h2><span>Award</span> Winning <span>Digital Agency</span> <br />
                        provide a wide range of digital services <br /> Design &
                        <span> Development</span> Expertise
                        <Image src={Aboutim3} alt="" />
                    </h2>
                    <div className="fade_bottom">
                        <Link onClick={ClickHandler} href="/about">
                            <RollingText text="More about us" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About2;