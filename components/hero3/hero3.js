import React, { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import hero1 from '/public/images/slider/sqaure_shape.png'
import hero2 from '/public/images/slider/hero-img-2.jpg'
import hero3 from '/public/images/slider/side-shape.png'
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);


const Hero3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        const fadeElements = document.querySelectorAll(".fade_bottom");
        const isMobile = window.innerWidth < 1023;
        gsap.set(fadeElements, { y: 30, opacity: 0 });
        fadeElements.forEach((item) => {
            const animation = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: isMobile ? "top center+=100" : "top center+=200",
                },
            });

            animation.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
                stagger: isMobile ? 0 : 0.2,
            });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    useEffect(() => {
        const defaults = {
            duration: 1.2,
            ease: "power4.out",
            animation: "fade_from_bottom",
            once: false,
        };

        const animations = {
            fade_from_bottom: { y: 180, opacity: 0 },
            fade_from_top: { y: -180, opacity: 0 },
            fade_from_left: { x: -180, opacity: 0 },
            fade_from_right: { x: 180, opacity: 0 },
            fade_in: { opacity: 0 },
            rotate_up: { y: 180, rotation: 10, opacity: 0 },
        };

        const scrollAnimations = document.querySelectorAll(".scroll-text-animation");
        scrollAnimations.forEach((box) => {
            const animationType = animations[box.dataset.animation] || animations[defaults.animation];
            gsap.from(box, {
                ...animationType,
                duration: box.dataset.animationDuration || defaults.duration,
                scrollTrigger: {
                    trigger: box,
                    start: "top bottom+=10%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);


    useEffect(() => {
        const allBtns = gsap.utils.toArray(".btn-wrapper");
        const allBtnCircles = gsap.utils.toArray(".btn-move");

        if (allBtns.length > 0) {
            allBtns.forEach((btn, i) => {
                const btnElement = btn;
                const btnCircle = allBtnCircles[i];

                const callParallax = (e) => parallaxIt(e, btnCircle, 80);

                const parallaxIt = (e, target, movement) => {
                    const rect = btnElement.getBoundingClientRect();
                    const relX = e.clientX - rect.left;
                    const relY = e.clientY - rect.top;

                    gsap.to(target, 0.5, {
                        x: ((relX - rect.width / 2) / rect.width) * movement,
                        y: ((relY - rect.height / 2) / rect.height) * movement,
                        ease: Power2.easeOut,
                    });
                };

                btnElement.addEventListener('mousemove', callParallax);
                btnElement.addEventListener('mouseleave', () => {
                    gsap.to(btnCircle, 0.5, {
                        x: 0,
                        y: 0,
                        ease: Power2.easeOut,
                    });
                });

                return () => {
                    btnElement.removeEventListener('mousemove', callParallax);
                };
            });
        }
    }, []);


    return (
        <section className="hero-section-s3">
            <div className="container">
                <div className="hero-wrap">
                    <div className="title">
                        <div className="scroll-text-animation" data-animation="fade_from_bottom">
                            <h2><span>We’re /</span> Ryzonix</h2>
                            <h3>web <span>/software house</span></h3>
                            <div className="p-style-s2">
                                <p>Custom web development, tech consulting, startup MVPs, SaaS, and mobile—built with clean code and secure architecture.</p>
                            </div>
                        </div>
                        <div className="scroll-text-animation" data-animation="fade_from_bottom">
                            <Link onClick={ClickHandler} href="/about" className="btn-wrapper btn-move"><i className="ti-arrow-top-right"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-shape">
                <Image src={hero1} alt="" />
            </div>
            <div
                className="bg-image fade_bottom"
                style={{
                    maskImage: `url(${'/images/slider/side-shape.png'})`, 
                    WebkitMaskImage: `url(${'/images/slider/side-shape.png'})`, 
                }}
            >
                <Image src={hero2} alt="" />
            </div>
            <div className="shape"></div>
            <div className="shape-2"></div>

        </section>
    );
};

export default Hero3;



