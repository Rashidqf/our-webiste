import React from 'react';
import StartImg from '/public/images/stert-2.svg'
import Image from 'next/image';

function MarqueeSectionS2(props) {
    return (
        <section className="marquee-section fade_bottom">
            <div className="marquee_container">
                <div className="marquee">
                    <h2><Image src={StartImg} alt="" /> web development</h2>
                    <h2><Image src={StartImg} alt="" /> tech consulting</h2>
                    <h2><Image src={StartImg} alt="" /> startup MVPs</h2>
                    <h2><Image src={StartImg} alt="" /> SaaS apps</h2>
                    <h2><Image src={StartImg} alt="" /> mobile apps</h2>
                    <h2><Image src={StartImg} alt="" /> secure &amp; scalable</h2>

                </div>
                <div className="marquee">
                    <h2><Image src={StartImg} alt="" /> full-stack</h2>
                    <h2><Image src={StartImg} alt="" /> deployment</h2>
                    <h2><Image src={StartImg} alt="" /> maintenance</h2>
                    <h2><Image src={StartImg} alt="" /> responsive UI</h2>
                    <h2><Image src={StartImg} alt="" /> clean code</h2>
                    <h2><Image src={StartImg} alt="" /> Ryzonix</h2>
                </div>
            </div>
        </section>
    );
}

export default MarqueeSectionS2;