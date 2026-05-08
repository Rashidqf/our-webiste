import React from 'react';
import shape from '/public/images/circel.svg'
import Link from 'next/link';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjecTitle = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="title">
                    <h2 className="scroll-text-animation" data-animation="fade_from_bottom"><span>Have a</span> project <span>in mind?</span></h2>
                    <div className="circel-shape">
                        <Image src={shape} alt="" />
                    </div>
                    <div className="fade_bottom">
                        <Link onClick={ClickHandler} href="/contact"> <span className="rolling-text">Let’s Work Together</span>
                            <i className="ti-arrow-top-right"></i></Link>
                    </div>
                    <div className="bg-shape">
                        <svg width="1746" height="1177" viewBox="0 0 1746 1177" fill="none">
                            <g filter="url(#filter0_f_1_327)">
                                <ellipse cx="872.831" cy="588.902" rx="567.536" ry="85.0932"
                                    transform="rotate(23.3308 872.831 588.902)" fill="#FD5B38" fillOpacity="0.47" />
                            </g>
                            <defs>
                                <filter id="filter0_f_1_327" x="0.592957" y="0.876709" width="1744.48" height="1176.05"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_1_327" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjecTitle;