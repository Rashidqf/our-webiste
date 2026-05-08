import React, { useEffect } from "react";
import Link from 'next/link';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Mid from '/public/images/slider/mid-img.jpg'
import Mid2 from '/public/images/slider/hero-img-1.jpg'
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
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

    return (
        <section className="hero-section-s2">
            <div className="container">
                <div className="hero-wrap">
                    <div className="title">
                        <div className="splittext-line">
                            <h2 className="normal scroll-text-animation" data-animation="fade_from_bottom">RYZONIX · SOFTWARE
                                &amp; WEB PARTNER</h2>
                            <div className="bottom-image scroll-text-animation" data-animation="fade_from_bottom">
                                <div className="image">
                                    <Image src={Mid} alt="" />
                                </div>
                                <Link onClick={ClickHandler} href="/about"><i className="ti-arrow-top-right"></i></Link>
                            </div>

                            <div className="p-style-s2 scroll-text-animation" data-animation="fade_from_right">
                                <p>Your digital partner for responsive, secure, and scalable websites—from MVPs to enterprise-grade apps.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-image">
                <Image src={Mid2} alt="" />
            </div>
            <ul className="hero-social">
                <li><Link onClick={ClickHandler} href="#">fb</Link></li>
                <li><Link onClick={ClickHandler} href="#" className="active">tw</Link></li>
                <li><Link onClick={ClickHandler} href="#">in</Link></li>
                <li><Link onClick={ClickHandler} href="#">yt</Link></li>
            </ul>
        </section>
    );
};

export default Hero2;