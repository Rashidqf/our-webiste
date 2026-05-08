import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Autoplay } from 'swiper'; // Corrected import path
import Link from 'next/link';
import Item from '/public/images/awards/item-01.jpg';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const awards = [
    { year: "2016 / 2012", title: "Brand of the year" },
    { year: "2017 / 2013", title: "Visionary Minds Award" },
    { year: "2024 / 2018", title: "Global Innovation" },
    { year: "2025 / 2020", title: "Visionary Minds Award" },
];

const AwardSectionS3 = () => {
    const sliderSettings = {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 10,
        speed: 3000,
    };

    return (
        <section className="award-section-s3 section-padding">
            <Swiper {...sliderSettings} modules={[Autoplay]} className="project-slider-active">
                {awards.map((award, index) => (
                    <SwiperSlide key={index}>
                        <div className="awward-item item">
                            <div className="text">
                                <span>
                                    FOR DISPLAY {award.year}
                                </span>
                                <h2>
                                    <Link onClick={ClickHandler} href="#">
                                        {award.title}
                                    </Link>
                                </h2>
                            </div>
                            <Link onClick={ClickHandler} href="#">
                                <i className="ti-arrow-top-right"></i>
                            </Link>
                            <div className="image-item">
                                <Image src={Item} alt="Award" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default AwardSectionS3;
