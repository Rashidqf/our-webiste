import React from 'react'
import StartImg from '/public/images/stert.svg'
import Image from 'next/image';

const MarqueeSection = (props) => {

    return (
        <section className="text-animation fade_bottom">
            <div className="marquee_container text-slider">
                <div className="marquee">
                    <div className="item">
                        <div>
                            <Image src={StartImg} alt="" />
                                <span className="marquee-item-text">web development</span>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <span className="marquee-item-text">tech consulting</span>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <span className="marquee-item-text">saas &amp; mobile</span>
                        </div>
                    </div>

                </div>
                <div className="marquee">
                    <div className="item">
                        <div>
                            <Image src={StartImg} alt="" />
                                <span className="marquee-item-text">startup mvps</span>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <span className="marquee-item-text">secure architecture</span>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <span className="marquee-item-text">scalable websites</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default MarqueeSection;
