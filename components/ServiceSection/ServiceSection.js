import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import Services from "../../api/Services";
import Image from 'next/image';
import BrandGearIcon from '../icons/BrandGearIcon';
import BrandBlobGlow from '../icons/BrandBlobGlow';

const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeItem, setActiveItem] = useState(null);

    const handleHover = (sitem) => {
        setActiveItem(sitem);
    };

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
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="title scroll-text-animation" data-animation="fade_from_right">
                    <h2>Web Development &amp; IT Consulting</h2>
                    <h3>our <span>Services</span></h3>
                </div>
                <div className="row g-0">
                    {Services.slice(0, 6).map((service, index) => (
                        <div className="col-lg-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={service.id || index}>
                            <div className={`service-card ${activeItem === service ? 'active' : ' item'}`}
                                onMouseEnter={() => handleHover(service)}>
                                <div className="text">
                                    <span>{service.Subtitle}</span>
                                    <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`} title={`${service.title} – Ryzonix`}>{service.title}</Link></h2>
                                </div>
                                <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`} className="icon">
                                    <i className="ti-arrow-top-right"></i>
                                </Link>
                                {/* <div className="image">
                                    <Image src={service.sImg} alt="" />
                                </div> */}
                            </div>
                        </div>
                    ))
                    }
                </div>
                <Link onClick={ClickHandler} href="/service" title="View all Ryzonix services" className="service-all btn-wrapper btn-move scroll-text-animation" data-animation="fade_from_bottom">More
                    <br />
                    Service
                    <div className="shape theme-shape">
                        <BrandGearIcon className="theme-shape__icon" size={196} gradientId="serviceGear" />
                    </div>
                </Link>
            </div>
            <div className="bg-shape">
                <BrandBlobGlow filterId="serviceBlobFilter" />
            </div>
        </section>
    );
}

export default ServiceSection;

