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
                                <h2>web development</h2>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <h2>tech consulting</h2>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <h2>saas &amp; mobile</h2>
                        </div>
                    </div>

                </div>
                <div className="marquee">
                    <div className="item">
                        <div>
                            <Image src={StartImg} alt="" />
                                <h2>startup mvps</h2>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <h2>secure architecture</h2>
                        </div>
                        <div>
                            <Image src={StartImg} alt="" />
                                <h2>scalable websites</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default MarqueeSection;
