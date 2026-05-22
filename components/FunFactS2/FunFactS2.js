import React, { useEffect } from 'react';
import BrandGearIcon from '../icons/BrandGearIcon';
import { gsap, Power2 } from 'gsap';
import CountUp from 'react-countup';

const FunFactS2 = () => {



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
        <section className="fanfuct-section-s2">
            <div className="container">
                <div className="title scroll-text-animation" data-animation="fade_from_bottom">
                    <div className="shape rotate-anm theme-shape">
                        <BrandGearIcon className="theme-shape__icon" size={48} gradientId="funfactGear" />
                    </div>
                    <p>we,ve listed some fascinating <span>insights <br/>
                        from our data</span> analytics</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move">
                            <h2><span><CountUp end={15} enableScrollSpy /></span>+</h2>
                            <h3>Years of experience</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move active">
                            <h2><span><CountUp end={22} enableScrollSpy /></span>+</h2>
                            <h3>Team Members</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move">
                            <h2><span><CountUp end={25} enableScrollSpy /></span>k</h2>
                            <h3>Happy Customers</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item btn-wrapper btn-move">
                            <h2><span><CountUp end={402} enableScrollSpy /></span>+</h2>
                            <h3>worldwide clients</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFactS2;