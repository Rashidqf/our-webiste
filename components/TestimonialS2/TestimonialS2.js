import React from "react";
import Slider from "react-slick";
import testimonial1 from '/public/images/testimonial/3.jpg'
import testimonial2 from '/public/images/testimonial/4.jpg'
import testimonialround from '/public/images/testimonial/round-img-1.jpg'
import testimonialround2 from '/public/images/testimonial/round-img-2.jpg'
import testimonialround3 from '/public/images/testimonial/round-img-3.jpg'
import testimonialround4 from '/public/images/testimonial/round-img-4.jpg'
import Image from "next/image";





const testimonials = [
    {
        id: '01',
        Des: "creative agency, we believe in the power of imagination and innovation.We are constantly pushing the boundaries of what is possible, and strive to create work that is not only bea utiful and effective, but also meaningful and impactful..",
        Title: 'Robert J. Hare',
        Sub: "Founder & Ceo",
        image: testimonial1,
    },
    {
        id: '02',
        Des: "creative agency, we believe in the power of imagination and innovation.We are constantly pushing the boundaries of what is possible, and strive to create work that is not only bea utiful and effective, but also meaningful and impactful..",
        Title: 'Lisa J. Hanna',
        Sub: "Admin",
        image: testimonial2,
    },

]

const TestimonialS2 = (props) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
    }


    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center scroll-text-animation" data-animation="fade_from_bottom">
                    <div className="col-lg-5 col-12">
                        <div className="testimonial-left">
                            <div className="image-1" style={{
                                maskImage: `url(${'/images/testimonial/redius-1.png'})`,
                                WebkitMaskImage: `url(${'/images/testimonial/redius-1.png'})`,
                            }} >
                                <Image src={testimonialround} alt="" />
                            </div>
                            <div className="image-2" style={{
                                maskImage: `url(${'/images/testimonial/redius-2.png'})`,
                                WebkitMaskImage: `url(${'/images/testimonial/redius-2.png'})`,
                            }}>
                                <Image src={testimonialround2} alt="" />
                            </div>
                            <div className="image-3" style={{
                                maskImage: `url(${'/images/testimonial/redius-3.png'})`,
                                WebkitMaskImage: `url(${'/images/testimonial/redius-3.png'})`,
                            }}>
                                <Image src={testimonialround3} alt="" />
                            </div>
                            <div className="image-4" style={{
                                maskImage: `url(${'/images/testimonial/redius-4.png'})`,
                                WebkitMaskImage: `url(${'/images/testimonial/redius-4.png'})`,
                            }}>
                                <Image src={testimonialround4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="testimonial-right">
                            <div className="title">
                                <h2>Most <span>exprerienced</span> servi <br />
                                    We <span>provided</span></h2>
                            </div>
                            <div className="testimonial-slider testimonial-slider-s2">
                                <Slider {...settings}>
                                    {testimonials.map((testitem, titem) => (
                                        <div className="item" key={titem}>
                                            <p>{testitem.Des}</p>
                                            <ul>
                                                <li>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                        <path
                                                            d="M10.4151 0L13.775 6.32631L20.83 7.56695L15.8517 12.7175L16.8519 19.8105L10.4151 16.6674L3.97819 19.8105L4.97838 12.7175L0 7.56695L7.05499 6.32631L10.4151 0Z"
                                                            fill="#FD5B38" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                        <path
                                                            d="M10.4151 0L13.775 6.32631L20.83 7.56695L15.8517 12.7175L16.8519 19.8105L10.4151 16.6674L3.97819 19.8105L4.97838 12.7175L0 7.56695L7.05499 6.32631L10.4151 0Z"
                                                            fill="#FD5B38" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                        <path
                                                            d="M10.4151 0L13.775 6.32631L20.83 7.56695L15.8517 12.7175L16.8519 19.8105L10.4151 16.6674L3.97819 19.8105L4.97838 12.7175L0 7.56695L7.05499 6.32631L10.4151 0Z"
                                                            fill="#FD5B38" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                        <path
                                                            d="M10.4151 0L13.775 6.32631L20.83 7.56695L15.8517 12.7175L16.8519 19.8105L10.4151 16.6674L3.97819 19.8105L4.97838 12.7175L0 7.56695L7.05499 6.32631L10.4151 0Z"
                                                            fill="#FD5B38" />
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                        <path
                                                            d="M10.4151 0L13.775 6.32631L20.83 7.56695L15.8517 12.7175L16.8519 19.8105L10.4151 16.6674L3.97819 19.8105L4.97838 12.7175L0 7.56695L7.05499 6.32631L10.4151 0Z"
                                                            fill="#FD5B38" />
                                                    </svg>
                                                </li>
                                            </ul>
                                            <div className="author">
                                                <div className="image">
                                                    <Image src={testitem.image} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h4>{testitem.Title}</h4>
                                                    <span>{testitem.Sub}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialS2;







