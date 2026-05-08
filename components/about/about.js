import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CountUp from 'react-countup';
import Link from 'next/link';
import RollingText from "../RollingText/RollingText";

gsap.registerPlugin(ScrollTrigger);

const About = (props) => {

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
        <section className="about-section">
            <div className="container">
                <div className="about-wraper">
                    <h2 className="scroll-text-animation" data-animation="fade_from_left"><span>Ryzonix</span> is a modern software house
                        specializing in custom web development for startups, SMBs, and enterprises—
                        <span className="color">responsive</span>, secure architecture, and
                        intuitive <span className="line">UX....</span>
                        {/* <Image src={abImg} alt="" /> */}
                        </h2>
                    <p className="scroll-text-animation" data-animation="fade_from_right">We deliver clean code, thoughtful design, and secure full-stack builds—from discovery and MVP delivery to deployment and ongoing maintenance—so your brand can grow with confidence online.</p>
                    <div className="scroll-text-animation" data-animation="fade_from_left">
                        <Link onClick={ClickHandler} href="/about"> 
                            <RollingText text="More about us" />
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                    <div className="funfact scroll-text-animation" data-animation="fade_from_right">
                        <div className="item">
                            <h3><span><CountUp end={5} enableScrollSpy /></span></h3>
                            <p><span>Specialty areas</span><i className="ti-arrow-top-right"></i></p>
                        </div>
                        <div className="item">
                            <h3><span>2025</span></h3>
                            <p><span>Founded</span> <i className="ti-arrow-top-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
