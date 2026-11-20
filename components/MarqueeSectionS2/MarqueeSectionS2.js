import React from 'react';
import StartImg from '/public/images/stert-2.svg'
import Image from 'next/image';

function MarqueeSectionS2(props) {
    return (
        <section className="marquee-section fade_bottom">
            <div className="marquee_container">
                <div className="marquee">
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> web development</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> tech consulting</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> startup MVPs</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> SaaS apps</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> mobile apps</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> secure &amp; scalable</span>

                </div>
                <div className="marquee">
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> full-stack</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> deployment</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> maintenance</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> responsive UI</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> clean code</span>
                    <span className="marquee-item-text"><Image src={StartImg} alt="" /> Ryzonix</span>
                </div>
            </div>
        </section>
    );
}

export default MarqueeSectionS2;